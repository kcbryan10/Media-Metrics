        import React, { useState } from 'react';

        import { useMutation } from '@apollo/client';
        import { ADD_GAME_THOUGHT } from '../../utils/mutations';
        import { QUERY_ME, QUERY_GAME_THOUGHTS } from '../../utils/queries';
        
        const GameThoughtForm = () => {
          const [thoughtText, setText] = useState('');
          const [characterCount, setCharacterCount] = useState(0);
        
          const [addGameThought, { error }] = useMutation(ADD_GAME_THOUGHT, {
            update(cache, { data: { addGameThought } }) {
              try {
                const { gameThoughts } = cache.readQuery({ query: QUERY_GAME_THOUGHTS });
                cache.writeQuery({
                  query: QUERY_GAME_THOUGHTS,
                  data: { thoughts: [addGameThought, ...gameThoughts] },
                });
              } catch (e) {
                console.error(e);
              }
        
              const { me } = cache.readQuery({ query: QUERY_ME });
              cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, gameThoughts: [...me.gameThoughts, addGameThought] } },
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
              await addGameThought({
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
        
        export default GameThoughtForm;
        