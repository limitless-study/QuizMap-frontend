const clientId = '485211779781-l1tgqmlf955l76f04dlotmfjtehp21et.apps.googleusercontent.com';
// const redirectUri = 'http://localhost:8080/google/callback';
const redirectUri = 'https://quizmap.co.kr/google/callback';
const scope = 'https://www.googleapis.com/auth/userinfo.email';
const GOOGLE_AUTO_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`;

export default GOOGLE_AUTO_URL;
