import React from 'react';
import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';


const Home = () => {
    const { loading, data } = useQuery(QUERY_THOUGHTS);
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    const thoughts = data?.thoughts || [];

    const loggedIn = Auth.loggedIn();


    return (
        <main>
            <div className='homepage-content'>
                <div>
                    <h4 className="homepage-titles">About Us</h4>
                    <div className='homepage-desc'>
                        <p className='home-text'>description</p>
                    </div>
                </div>
                <div>
                    <h4 className="homepage-titles"> How to Reach Us</h4>
                    <div className='homepage-desc'>
                        <p className='home-text'>description</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;