import React from 'react';
import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHT } from '../utils/queries';

const Music = () => {
  const { loading, data } = useQuery(QUERY_THOUGHT);
  const thoughts = data?.thoughts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main className='musicpage'>
    <div className='content'>
          <div>
          <ThoughtForm />
        </div>
    
      <div>
          <div>Loading...</div>
  
          <ThoughtList
            thoughts={thoughts}
            title="Thought List"
          />
  
      </div>
    </div>
  </main>
  );
};

export default Music;