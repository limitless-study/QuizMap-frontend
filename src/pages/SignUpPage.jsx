import styled from '@emotion/styled';
import img from '../img/Saly-10.svg';

import SignUpContainer from '../containers/SignUpContainer';

const Image = styled.img({
  display: 'absolute',
  width: '45vw',
  height: '100vh',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
});

export default function SignUpPage() {
  return (
    <div style={{ display: 'flex', width: '100vw', minHeight: '100vh' }}>
      <div style={{
        display: 'flex',
        flexGrow: '1',
        margin: '5em 0',
        width: '60vh',
        backgroundColor: 'white',
        transition: '300ms',
      }}
      >
        <SignUpContainer />
      </div>
      <div style={{
        position: 'fixed',
        top: '0',
        right: '0',
        overflowX: 'hidden',
        background: 'linear-gradient(#5352ED, #70C3FF)',
      }}
      >
        <Image src={img} alt="" />
      </div>
    </div>
  );
}
