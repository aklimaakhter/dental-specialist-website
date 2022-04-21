import React from 'react';

const Blog = () => {
    return (
        <div className=' container'>
            <div className='row'>
                <div>
                    <h3>Q.1: Difference between authorization and authentication?</h3>
                    <p>Ans: 1.Authentication verifies who the user is but Authorization   determine  resources a user can.
                        <br />
                        2.Authentication is the first step of good identity and access management and Authorization always takes place after authentication.
                        <br />
                        3.Authentication is visible to and partially changeable by the user and Authorization isn't visible to or changeable by the user.
                        <br />
                        4.Authentication works through passwords, one-time pins and other information but Authorization works through settings that are implemented and maintained by the organization.
                    </p>
                </div>
                <div>
                    <h3>Q.2: Why are you using firebase? What other options do
                        you have to implement authentication?</h3>
                        <p>Ans:Firebase by Google can be used for the following Firebase manages all data real-time in the database. So, the exchange of data from the database is easy and   quick.
                        Authentication is used by a server, when the server needs to know exactly who is accessing their information or site. specially ,
                        authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans and fingerprints.
                    </p>
                </div>
                <div>
                    <h3>Q.3:What other services does firebase provide other
                        than  authentication?</h3>
                        <p>Ans: 1:Back4app-Parse Hosting Platform;
                        <br />
                        2:Kinvey - Mobile Backend as a Service (mBaaS) for the Enterprise;
                        <br />
                        3:Backendless - Mobile Backend and API Services Platform;
                        <br />
                        4:Kuzzle - Backend for web, hybrid, or native mobile apps and IoT projects;
                        <br />
                        5:Kumulos - App Performance Management;

                    </p>
                </div>
            </div>
        </div>


    );
};

export default Blog;