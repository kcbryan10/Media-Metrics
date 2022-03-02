import React from 'react';
import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';

const Music = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className='musicpage'>
        <div class="page-title">
          Music!
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

export default Music;