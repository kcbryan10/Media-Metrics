import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import GamePage from './pages/Game';
import MoviePage from './pages/Movie';
import MusicPage from './pages/Music';
import Login from './pages/Login';
import SignUp from './pages/Signup'