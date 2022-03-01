import React from 'react';

const Home = () => {

    return (
  <main className='homepage'>
    <section id="what-you-do" className="processs">
      <div className="flex-row">
        <h2 className="section-title secondary-border">
          Start Blogging!
        </h2> 
      </div>
      <div className="process">
        <h3>step 1</h3>
        <div className="process-info">
          <div className="process-text">
            <h4>Sign up</h4>
            <p>sign up on our state of the art sign up page!</p>
          </div>
        </div>
      </div>
      <div className="process">
        <h3>step 2</h3>
        <div className="process-info">
          <div className="process-text">
            <h4>Start Blogging</h4>
            <p>Go to one of are three blog pages!</p>
          </div>
        </div>
      </div>
      <div className="process">
        <h3>step 3</h3>
        <div className="process-info">
          <div className="process-text">
            <h4>React to Posts</h4>
            <p>react to posts by either commenting or giving it a thumbs up or down!</p>
          </div>
        </div>
      </div>
    </section>

     <section id="your-developers">
      <div className="flex-row">
        <h2 className="section-title primary-border">
          Developers
        </h2>
      </div>

      <div className="developers">
        <article className="developer">
          <div className="developer-bio">
            <h3 className="developer-name">Bryan Keller</h3>
            <h4 className="developer-role">FrontEnd</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!</p>
            <a className='git-link' href='https://github.com/kcbryan10' target="_blank">Github</a>
          </div>
        </article>

         <article className="developer">
          <div className="developer-bio">
            <h3 className="developer-name">Justin Eicher</h3>
            <h4 className="developer-role">BackEnd</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!</p>
            <a className='git-link' href='https://github.com/Justin-Eicher' target="_blank">Github</a>
          </div>
        </article>

        <article className="developer">
          <div className="developer-bio">
            <h3 className="developer-name">Jeramy Sena</h3>
            <h4 className="developer-role">BackEnd</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!</p>
            <a className='git-link' href='https://github.com/JeramySena' target="_blank">Github</a>
            </div>
          </article>

        <article className="developer">
          <div className="developer-bio">
            <h3 className="developer-name">Djamel Ramdani</h3>
            <h4 className="developer-role">FrontEnd</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!</p>
            <a className='git-link' href='https://github.com/scorpiondz1999' target="_blank">Github</a>
          </div>
        </article>
      </div>
    </section>
            
        </main>
    );
};

export default Home;