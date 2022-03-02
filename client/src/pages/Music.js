import React from 'react';
import MusicThoughtList from '../components/MusicThoughtList';
import MusicThoughtForm from '../components/MusicThoughtForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_MUSIC_THOUGHTS } from '../utils/queries';

const Music = () => {
  const { loading, data } = useQuery(QUERY_MUSIC_THOUGHTS);
  const musicThoughts = data?.musicThoughts || [];

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
              <MusicThoughtForm />
            </div>
          )}
          <div>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <MusicThoughtList
                musicThoughts={musicThoughts}
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