import React from 'react';
import GameThoughtList from '../components/GameThoughtList';
import GameThoughtForm from '../components/GameThoughtForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_GAME_THOUGHTS } from '../utils/queries';

const Game = () => {
  const { loading, data } = useQuery(QUERY_GAME_THOUGHTS);
  const gameThoughts = data?.gameThoughts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className='gamepage'>
        <div class="page-title">
          Video Games!
        </div>
        <div className='content'>
          {loggedIn && (
            <div>
              <GameThoughtForm />
            </div>
          )}
          <div>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <GameThoughtList
                gameThoughts={gameThoughts}
                title="Thought List"
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Game;