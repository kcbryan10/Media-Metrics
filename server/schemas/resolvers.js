const { AuthenticationError } = require("apollo-server-express");
const { argsToArgsConfig } = require("graphql/type/definition");
const {
  User,
  reactionSchema,
  GameComment,
  MovieComment,
  MusicComment,
} = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("gameThoughts")
          .populate("movieThoughts")
          .populate("musicThoughts");

        return userData;
      }
    },
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("gameThoughts")
        .populate("movieThoughts")
        .populate("musicThoughts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("gameThoughts")
        .populate("movieThoughts")
        .populate("musicThoughts");
    },
    gameThoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return GameComment.find(params).sort({ createdAt: -1 });
    },
    gameThought: async (parent, { _id }) => {
      return GameComment.findOne({ _id });
    },
    movieThoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return MovieComment.find(params).sort({ createdAt: -1 });
    },
    movieThought: async (parent, { _id }) => {
      return MovieComment.findOne({ _id });
    },
    musicThoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return MusicComment.find(params).sort({ createdAt: -1 });
    },
    musicThought: async (parent, { _id }) => {
      return MusicComment.findOne({ _id });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addGameThought: async (parent, args, context) => {
      if (context.user) {
        const gameThought = await GameComment.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { gameThoughts: gameThought._id } },
          { new: true }
        );

        return gameThought;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addMovieThought: async (parent, args, context) => {
      if (context.user) {
        const movieThought = await MovieComment.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { movieThoughts: movieThought._id } },
          { new: true }
        );

        return movieThought;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addMusicThought: async (parent, args, context) => {
      if (context.user) {
        const musicThought = await MusicComment.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { musicThoughts: musicThought._id } },
          { new: true }
        );

        return musicThought;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
