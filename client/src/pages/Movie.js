import React from 'react';
import MovieThoughtList from '../components/MovieThoughtList';
import MovieThoughtForm from '../components/MovieThoughtForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_MOVIE_THOUGHTS } from '../utils/queries';

const Movie = () => {
  const { loading, data } = useQuery(QUERY_MOVIE_THOUGHTS);
  const movieThoughts = data?.movieThoughts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className='moviepage'>
        <div class="page-title">
          Movies!
        </div>
        <div className='content'>
          {loggedIn && (
            <div>
              <MovieThoughtForm />
            </div>
          )}
          <div>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <MovieThoughtList
                movieThoughts={movieThoughts}
                title="Thought List"
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Movie;