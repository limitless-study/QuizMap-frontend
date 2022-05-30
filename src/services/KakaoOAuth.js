const CLIENT_ID = 'b84c78d2735d1a81acccdb5fde9ce215';
// const REDIRECT_URI = 'http://localhost:8080/kakao/callback';
const REDIRECT_URI = 'https://quizmap.co.kr/kakao/callback';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export default KAKAO_AUTH_URL;
