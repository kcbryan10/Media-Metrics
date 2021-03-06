import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_ME, QUERY_THOUGHTS } from '../../utils/queries';

const ThoughtForm = () => {
  const [thoughtText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });
        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
      });
    },
  });

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.value)
    try {
      await addThought({
        variables: { thoughtText },
      });

      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }

    window.location.reload();

  };

  return (
    <div>
      <form
        className="blog-form"
        onSubmit={handleFormSubmit}
      >
        <div>
        <textarea
          placeholder="Blog about it"
          value={thoughtText}
          className="blog-input"
          onChange={handleChange}
        ></textarea>
        </div>
        <button className="blog-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ThoughtForm;
