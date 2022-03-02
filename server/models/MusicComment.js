const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const musicCommentSchema = new Schema(
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

musicCommentSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const MusicComment = model('Music Comment', musicCommentSchema);

module.exports = MusicComment;