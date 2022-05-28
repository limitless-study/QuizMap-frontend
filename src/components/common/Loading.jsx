import { ThreeDots } from 'react-loader-spinner';

import styled from '@emotion/styled';

const SpinContainer = styled.div({
});

export default function Loading({ size }) {
  return (
    <SpinContainer>
      <ThreeDots
        color="#5B40FF"
        height={size}
        width={size}
        ariaLabel="loading"
      />
    </SpinContainer>
  );
}
