const {gql} = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    gameThought: [gameThought]
    movieThought: [movieThought]
    musicThought: [musicThought]
    friends: [User]
  }

  type gameThought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type movieThought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type musicThought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    gameThoughts(username: String): [gameThought]   
    gameThought(_id: ID!): gameThought    
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User    
    movieThoughts(username: String): [movieThought]    
    movieThought(_id: ID!): musicThought    
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User    
    musicThoughts(username: String): [musicThought]    
    musicThought(_id: ID!): musicThought
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addGameThought(thoughtText: String!): gameThought    
    addMovieThought(movieThoughtText: String!): movieThought   
    addMusicThought(thoughtText: String!): musicThought
    addReaction(thoughtId: ID!, reactionBody: String!): movieThought  
  }
`;

module.exports = typeDefs;
