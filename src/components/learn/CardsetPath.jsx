import { RiArrowRightSLine } from 'react-icons/ri';

export default function CardsetPath({ path }) {
  if (!path) {
    return <span />;
  }

  return (
    <div>
      <ul>
        {path.map(({ id, topic }, index) => (
          <li
            key={id}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1b1c1d',
            }}
          >
            {topic}
            {index !== path.length - 1 ? <RiArrowRightSLine /> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
