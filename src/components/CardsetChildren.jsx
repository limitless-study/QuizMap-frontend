import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { BsCheckLg } from 'react-icons/bs';
import { FaFolder, FaPen, FaPlayCircle } from 'react-icons/fa';

const Wrapper = styled.ul({
  width: '95%',
  maxHeight: '75%',
  overflow: 'auto',
  '::-webkit-scrollbar': {
    width: '10px',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#F1F1F1',
    borderRadius: '10px',
  },
});

const CardsetBoxField = styled.li({
  width: '97%',
  fontWeight: 'bold',
  marginBottom: '10px',
  backgroundColor: '#F3F3F3',
  padding: '5px 0px 5px 5px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& a:hover': {
    textDecoration: 'underline',
  },
});

const CardBoxField = styled.li({
  width: '97%',
  fontWeight: 'bold',
  marginBottom: '10px',
  backgroundColor: '#FAFAFA',
  padding: '5px 0px 5px 5px',
  display: 'flex',
  alignItems: 'center',
});

const CardsetBoxTitle = styled.div({
  display: 'flex',
});

const IconBox = styled.button({
  width: '28px',
  height: '28px',
  fontSize: '15px',
  backgroundColor: '#D4D4D4',
  borderRadius: '2px',
  border: 'none',
  color: 'white',
  marginRight: '5px',
  '& a': {
    display: 'block',
    fontWeight: 'bold',
    border: 'none',
    color: 'white',
    textAlign: 'center',
  },
});

export default function CardsetChildren({ cardsetChildren }) {
  return (
    <Wrapper>
      {cardsetChildren.map((child) => {
        if (child.type === 'CARDSET') {
          return (
            <CardsetBoxField
              key={child.id}
            >
              <CardsetBoxTitle>
                <IconBox>
                  <FaFolder />
                </IconBox>
                <Link to={`/cardsets/${child.id}`}>
                  {child.title}
                </Link>
              </CardsetBoxTitle>
              <div>
                <IconBox
                  type="button"
                >
                  <Link to={`/studio/${child.id}`}>
                    <FaPen />
                  </Link>
                </IconBox>
                <IconBox
                  type="button"
                >
                  <Link to={`/learn/${child.id}`}>
                    <FaPlayCircle />
                  </Link>
                </IconBox>
              </div>
            </CardsetBoxField>
          );
        }
        return (
          <CardBoxField
            key={child.id}
          >
            <IconBox>
              <BsCheckLg />
            </IconBox>
            {child.title}
          </CardBoxField>
        );
      })}
    </Wrapper>
  );
}
