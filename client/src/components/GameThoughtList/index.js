import React from 'react';
import { Link } from 'react-router-dom';

const GameThoughtList = ({ gameThoughts, title }) => {
  if (!gameThoughts.length) {
    return <h3 className='no-thoughts'>No Blogs Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {gameThoughts &&
        gameThoughts.map(gameThought => (
          <div key={gameThought._id}>
            <p>
              <Link
                to={`/profile/${gameThought.username}`}
                style={{ fontWeight: 700 }}
              >
                {gameThought.username}
              </Link>{' '}
            </p>
            <div>
              <Link to={`/thought/${gameThought._id}`}>
                <p>{gameThought.thoughtText}</p>
                <p>
                  Comments: {gameThought.reactionCount} || Click to{' '}
                  {gameThought.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default GameThoughtList;
