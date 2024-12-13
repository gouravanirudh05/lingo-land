import React from 'react';
import { Link } from 'react-router-dom';
import { Languages, Brain, Trophy } from 'lucide-react';
import './LandingPage.css'; // Importing the external CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container">
        {/* Header Section */}
        <header className="header">
          <h1 className="title">Lingo Land</h1>
          <p className="subtitle">Learn languages the fun way!</p>
          <div className="button-group">
            <Link to="/signin" className="button sign-in">Sign In</Link>
            <Link to="/signup" className="button sign-up">Sign Up</Link>
          </div>
        </header>

        {/* Features Section */}
        <section className="features">
          <FeatureCard
            Icon={Languages}
            title="Multiple Languages"
            description="Learn from a variety of languages with our pixel-perfect lessons."
          />
          <FeatureCard
            Icon={Brain}
            title="AI-Powered"
            description="Advanced AI technology to personalize your learning experience."
          />
          <FeatureCard
            Icon={Trophy}
            title="Gamified Learning"
            description="Earn achievements and compete with friends."
          />
        </section>
      </div>
    </div>
  );
};

const FeatureCard = ({ Icon, title, description }) => (
  <div className="feature-card">
    <Icon className="feature-icon" />
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

export default LandingPage;
