import React from 'react';
import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHT } from '../utils/queries';

const Movie = () => {
  const { loading, data } = useQuery(QUERY_THOUGHT);
  const thoughts = data?.thoughts || [];

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
              <ThoughtForm />
            </div>
          )}
          <div>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ThoughtList
                thoughts={thoughts}
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