import styled from '@emotion/styled';

import { HiLogout } from 'react-icons/hi';

const UserButton = styled.button({
  verticalAlign: 'middle',
  padding: '4px 10px',
  border: 'none',
  borderRadius: '10em',
  height: '100%',
  transition: 'opacity 0.4s',
  ':hover': {
    cursor: 'pointer',
    opacity: '0.8',
  },
});

const ToggleDropDown = styled.div(
  {
    position: 'absolute',
    width: '150px',
    padding: '7px',
    zIndex: '10',
    marginTop: '5px',
    backgroundColor: 'white',
    transition: 'opacity .2s ease',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    opacity: '0.9',
    top: '-50px',
    ':hover': {
      backgroundColor: '#e7e5ff',
      opacity: '0.85',
      cursor: 'pointer',
    },
  },
  (props) => ({
    display: props.toggleDropDown ? 'block' : 'none',
  }),
);

export default function UserInfoField({
  email, toggleDropDown, onClickToggle, onClickLogout,
}) {
  return (
    <div>
      <UserButton
        type="button"
        onClick={() => onClickToggle(true)}
        onBlur={() => onClickToggle(false)}
      >
        {email}
      </UserButton>
      <ToggleDropDown
        toggleDropDown={toggleDropDown}
        onMouseDown={onClickLogout}
      >
        <HiLogout style={{ marginRight: '10px' }} />
        Log out
      </ToggleDropDown>

    </div>
  );
}
