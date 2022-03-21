import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import CreatePage from './pages/CreatePage';
import CardsetPage from './pages/CardsetPage';
import RootPage from './pages/RootPage';

// TODO: delete these and make each pages
function AboutPage() { return (<div>about</div>); }
function LoginPage() { return (<div>log in</div>); }
function SignupPage() { return (<div>sign up</div>); }

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cardsets/:id" element={<CardsetPage />} />
        <Route path="/learn/:id" element={<LearnPage />} />
        <Route path="/root" element={<RootPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </div>
  );
}