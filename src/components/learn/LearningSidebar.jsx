import styled from '@emotion/styled';

import { MdEditNote } from 'react-icons/md';

const SideBarWrapper = styled.div({
  right: '0',
  display: 'flex',
  position: 'fixed',
  paddingTop: '60px',
  flexDirection: 'column',
  textAlign: 'center',
  width: '68px',
  height: '100%',
  backgroundColor: '#F1F1EF',
  borderLeft: '1px solid #DDDDDD',
});

const SideBarMenu = styled.div(
  {
    display: 'inline-block',
    verticalAlign: 'center',
    padding: '15px 0',
    color: '#868e96',
    ':hover': {
      cursor: 'pointer',
      color: '#1b1c1d',
    },
  },
  (props) => ({
    backgroundColor: props.isNotesHidden ? 'none' : 'white',
    color: props.isNotesHidden ? '#868e96' : '#1b1c1d',
  }),
);

export default function LearningSidebar({ isNotesHidden, onClick }) {
  return (
    <SideBarWrapper>
      <SideBarMenu onClick={onClick} isNotesHidden={isNotesHidden}>
        <MdEditNote size={30} style={{ textAlign: 'center' }} />
      </SideBarMenu>
    </SideBarWrapper>
  );
}
