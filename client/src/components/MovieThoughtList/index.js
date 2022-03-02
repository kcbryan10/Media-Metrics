import React from 'react';
import { Link } from 'react-router-dom';

const MovieThoughtList = ({ movieThoughts, title }) => {
  if (!movieThoughts.length) {
    return <h3 className='no-thoughts'>No Blogs Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {movieThoughts &&
        movieThoughts.map(movieThought => (
          <div key={movieThought._id}>
            <p>
              <Link
                to={`/profile/${movieThought.username}`}
                style={{ fontWeight: 700 }}
              >
                {movieThought.username}
              </Link>{' '}
            </p>
            <div>
              <Link to={`/movieThought/${movieThought._id}`}>
                <p>{movieThought.thoughtText}</p>
                <p>
                  Comments: {movieThought.reactionCount} || Click to{' '}
                  {movieThought.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieThoughtList;
