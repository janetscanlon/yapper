import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterPage/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
          Welcome to <b>Yapper</b>, your dedicated social media platform for book lovers! A community to share your passion for reading, connect with friends, and discover new books.

          </p>
        <b>Key Features</b>
          <ul>
          

            <li> <b>Create an Account:</b> Sign up easily to start sharing your book reviews and connecting with fellow readers.</li>
            <li> <b>Post Reviews:</b> Share insightful reviews of your recent reads to help others discover their next favorite book.</li>
            <li> <b>Follow Friends:</b> Stay updated with your friends' reading journeys by following them, liking their reviews, and engaging in lively discussions.</li>
            <li> <b>Interactive Features:</b>Engage with the community by liking your friends' reviews, and look forward to leaving comments on reviews—a new feature coming soon!</li>

        </ul>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
