import { Route, Routes, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import StudioPage from './pages/StudioPage';
import CardsetPage from './pages/CardsetPage';
import RootPage from './pages/RootPage';
import MindMapPage from './pages/MindMapPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import KakaoOAuth2RedirectHandler from './pages/KakaoOAuth2RedirectHandler';
import GoogleOAuth2RedirectHandler from './pages/GoogleOAuth2RedirectHandler';

import { get } from './utils';

export default function App() {
  const accessToken = useSelector(get('accessToken'));

  return (
    <div style={{ fontFamily: 'arial' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/studio/:id" element={accessToken ? <StudioPage /> : <Navigate replace to="/login" />} />
        <Route path="/cardsets/:id" element={accessToken ? <CardsetPage /> : <Navigate replace to="/login" />} />
        <Route path="/learn/:id" element={accessToken ? <LearnPage /> : <Navigate replace to="/login" />} />
        <Route path="/root" element={accessToken ? <RootPage /> : <Navigate replace to="/login" />} />
        <Route path="/login" element={accessToken ? <RootPage /> : <LoginPage />} />
        <Route path="/signup" element={accessToken ? <RootPage /> : <SignUpPage />} />
        <Route path="/mindmap/:id" element={accessToken ? <MindMapPage /> : <Navigate replace to="/login" />} />
        <Route path="/kakao/callback" element={<KakaoOAuth2RedirectHandler />} />
        <Route path="/google/callback" element={<GoogleOAuth2RedirectHandler />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </div>
  );
}
