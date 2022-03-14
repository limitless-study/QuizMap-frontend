import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CardsetsPage from './pages/CardsetsPage';
import CardsPage from './pages/CardsPage';

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
        <Route exact path="/cardsets/:id" element={<CardsPage />} />
        <Route path="/cardsets" element={<CardsetsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </div>
  );
}
