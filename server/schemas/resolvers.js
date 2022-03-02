const {AuthenticationError} = require('apollo-server-express');
const {argsToArgsConfig} = require('graphql/type/definition');
const {User, reactionSchema, Comment} = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({_id: context.user._id})
          .select('-__v -password')
          .populate('thoughts')

        return userData;
      }
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('thoughts')
    },
    user: async (parent, {username}) => {
      return User.findOne({username})
        .select('-__v -password')
        .populate('thoughts');
    },
    thoughts: async (parent, {username}) => {
      const params = username ? {username} : {};
      return Comment.find(params).sort({createdAt: -1});
    },
    thought: async (parent, {_id}) => {
      return Comment.findOne({_id});
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return {token, user};
    },
    login: async (parent, {email, password}) => {
      const user = await User.findOne({email});

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return {token, user};
    },
    addThought: async (parent, args, context) => {
      if (context.user) {
        const thought = await Comment.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { thoughts: thought._id } },
          { new: true }
        );

        return thought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
