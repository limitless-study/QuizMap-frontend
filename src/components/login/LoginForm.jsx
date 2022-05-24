import styled from '@emotion/styled';

import InputField from './InputField';

const Tag = styled.div({
  textAlign: 'left',
  fontSize: '15px',
  color: '#bcd4e6',
});

export default function SignUpForm({ email, password, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <Tag>E-Mail</Tag>
        <InputField
          targetName="email"
          inputValue={email}
          onChange={onChange}
        />
      </div>
      <div>
        <Tag>Password</Tag>
        <InputField
          type="password"
          targetName="password"
          inputValue={password}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
