import { Link } from 'react-router-dom';

import { BsCheckLg } from 'react-icons/bs';
import { FaFolder, FaPen, FaPlayCircle } from 'react-icons/fa';

import styled from '@emotion/styled';

const Wrapper = styled.div({
  width: '100%',
  height: '100%',
  padding: '20px',
});

const Title = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const Header = styled.div({
  alignItems: 'center',
  marginBottom: '10px',
});

const SubTitle = styled.h2({
  width: '91%',
  marginBottom: '10px',
  color: '#686868',
  borderBottom: '1px solid #C6C6C6',
});

const CardsetBoxField = styled.li({
  width: '90%',
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
  width: '90%',
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

const CardsetInfo = styled.div({
  color: '#c2c2c2',
  fontWeight: 'bolder',
  fontSize: '22px',
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

export default function Cardset({ cardsetInfo, cardsetChildren }) {
  const {
    id, name, cardSetCount, cardCount,
  } = cardsetInfo;

  return (
    <Wrapper>
      <Header>
        <Title>
          <h1>{name}</h1>
          <IconBox
            type="button"
          >
            <Link to={`/studio/${id}`}>
              <FaPen />
            </Link>
          </IconBox>
          <IconBox
            type="button"
          >
            <FaPlayCircle />
          </IconBox>

        </Title>
        <CardsetInfo>
          {`${cardSetCount} Cardsets, ${cardCount} Cards`}
        </CardsetInfo>
      </Header>
      <SubTitle>
        Cards
      </SubTitle>
      <ul>
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
                    <FaPlayCircle />
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
      </ul>
    </Wrapper>
  );
}
