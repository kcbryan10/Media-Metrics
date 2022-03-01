import React from 'react';

const Home = () => {

    return (
        <main className='homepage'>
                <section id="what-we-do" className="intro">
      <div className="flex-row">
        <h2 className="section-title primary-border">
          What We Do
        </h2>
      </div>
      <div className="flex-row">
        <p>
          butcher selfies chambray shabby chic gentrify readymade yr Echo Park XOXO Tumblr normcore Banksy direct trade  Blue Bottle chillwave you probably haven't heard of them single-origin coffee Vice fanny pack fixie Odd Future Austin fingerstache pickled twee synth Wes Anderson Thundercats viral bitters flannel meggings narwhal Marfa Schlitz sustainable Intelligentsia umami deep v craft
        </p>
      </div>
    </section>

    <section id="what-you-do" className="steps">
      <div className="flex-row">
        <h2 className="section-title secondary-border">
          Start Blogging!
        </h2> 
      </div>
      <div className="step">
        <h3>Step 1.</h3>
        <div className="step-info">
          <div className="step-img">
            <img src="./assets/images/step-1.svg" alt="" />
          </div>
          <div className="step-text">
            <h4>Sign up</h4>
            <p>sign up on our state of the art sign up page!</p>
          </div>
        </div>
      </div>
      <div className="step">
        <h3>Step 2.</h3>
        <div className="step-info">
          <div className="step-img">
            <img src="./assets/images/step-2.svg" alt="" />
          </div>
          <div className="step-text">
            <h4>Start Blogging</h4>
            <p>Go to one of are three blog pages!</p>
          </div>
        </div>
      </div>
      <div className="step">
        <h3>Step 4.</h3>
        <div className="step-info">
          <div className="step-img">
            <img src="./assets/images/step-4.svg" alt="" />
          </div>
          <div className="step-text">
            <h4>React to Posts</h4>
            <p>react to posts by either commenting or giving it a thumbs up or down!</p>
          </div>
        </div>
      </div>
    </section>

     <section id="your-trainers">
      <div className="flex-row">
        <h2 className="section-title primary-border">
          Developers
        </h2>
      </div>

      <div className="trainers">
        <article className="trainer">
          <img src="./assets/images/trainer-1.jpg" alt="Bryan" />
          <div className="trainer-bio">
            <h3 className="trainer-name">Bryan Keller</h3>
            <h4 className="trainer-role">FrontEnd</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!</p>
          </div>
        </article>

         <article className="trainer">
          <img src="./assets/images/trainer-1.jpg" alt="Justin" />
          <div className="trainer-bio">
            <h3 className="trainer-name">Justin Eicher</h3>
            <h4 className="trainer-role">BackEnd</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!</p>
          </div>
        </article>

        <article className="trainer">
          <img src="./assets/images/trainer-2.jpg" alt="Jeramy" />
          <div className="trainer-bio">
            <h3 className="trainer-name">Jeramy</h3>
            <h4 className="trainer-role">BackEnd</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!</p>
            </div>
          </article>

        <article className="trainer">
          <img src="./assets/images/trainer-3.jpg" alt="Djamel" />
          <div className="trainer-bio">
            <h3 className="trainer-name">Djamel Ramdani</h3>
            <h4 className="trainer-role">FrontEnd</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!</p>
          </div>
        </article>
      </div>
    </section>
            
        </main>
    );
};

export default Home;