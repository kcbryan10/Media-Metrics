import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_MUSIC_THOUGHT } from '../../utils/mutations';
import { QUERY_ME, QUERY_MUSIC_THOUGHTS } from '../../utils/queries';

const MusicThoughtForm = () => {
  const [thoughtText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addMusicThought, { error }] = useMutation(ADD_MUSIC_THOUGHT, {
    update(cache, { data: { addMusicThought } }) {
      try {
        const { musicThoughts } = cache.readQuery({ query: QUERY_MUSIC_THOUGHTS });
        cache.writeQuery({
          query: QUERY_MUSIC_THOUGHTS,
          data: { thoughts: [addMusicThought, ...musicThoughts] },
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, musicThoughts: [...me.musicThoughts, addMusicThought] } },
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
      await addMusicThought({
        variables: { thoughtText },
      });

      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
          <p>
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="blog-form"
      >
        <div>
        <textarea
          onSubmit={handleFormSubmit}
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

export default MusicThoughtForm;
