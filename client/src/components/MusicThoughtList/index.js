import React from 'react';
import { Link } from 'react-router-dom';

const MusicThoughtList = ({ musicThoughts, title }) => {
  if (!musicThoughts.length) {
    return <h3 className='no-thoughts'>No Blogs Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {musicThoughts &&
        musicThoughts.map(musicThought => (
          <div key={musicThought._id}>
            <p>
              <Link
                to={`/profile/${musicThought.username}`}
                style={{ fontWeight: 700 }}
              >
                {musicThought.username}
              </Link>{' '}
            </p>
            <div>
              <Link to={`/musicThought/${musicThought._id}`}>
                <p>{musicThought.thoughtText}</p>
                <p>
                  Comments: {musicThought.reactionCount} || Click to{' '}
                  {musicThought.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MusicThoughtList;
