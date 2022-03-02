import React from 'react';
import { Link } from 'react-router-dom';

const ThoughtList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3 className='no-thoughts'>No Blogs Yet</h3>;
  }

  return (
    <div>
      <h3 className='went-wrong'>{title}</h3>
      {thoughts &&
        thoughts.map(thought => (
          <div className='thoughts' key={thought._id}>
            <p>
              <Link
                to={`/profile/${thought.username}`}
                style={{ fontWeight: 700 }}
              >
                {thought.username}
              </Link>{' '}
            </p>
            <div className='text'>
              <Link to={`/thought/${thought._id}`}>
                <p>{thought.thoughtText}</p>
                <p>
                  Comments: {thought.reactionCount} || Click to{' '}
                  {thought.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
