const {AuthenticationError} = require('apollo-server-express');
const {User, reactionSchema, Comment} = require('../models');
const {signToken} = require('../utils/auth');
