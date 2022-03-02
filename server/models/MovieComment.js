const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const movieCommentSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'You need to leave a comment!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

movieCommentSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const MovieComment = model('MovieComment', movieCommentSchema);

module.exports = MovieComment;
