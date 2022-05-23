import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import StudioPage from './pages/StudioPage';
import CardsetPage from './pages/CardsetPage';
import RootPage from './pages/RootPage';
import MindMapPage from './pages/MindMapPage';
import SignUpPage from './pages/SignUpPage';

// TODO: delete these and make each pages
function AboutPage() { return (<div>about</div>); }
function LoginPage() { return (<div>log in</div>); }

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/studio/:id" element={<StudioPage />} />
        <Route path="/cardsets/:id" element={<CardsetPage />} />
        <Route path="/learn/:id" element={<LearnPage />} />
        <Route path="/root" element={<RootPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/mindmap/:id" element={<MindMapPage />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </div>
  );
}
