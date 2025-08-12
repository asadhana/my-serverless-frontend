import React from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>Welcome to the Serverless Frontend App</h1>
            <p>This is the main page of the application.</p>
            {/* Additional components and state management can be added here */}
        </div>
    );
};

export default Home;