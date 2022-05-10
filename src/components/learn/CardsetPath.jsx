import { HiOutlineChevronRight } from 'react-icons/hi';

export default function CardsetPath({ path }) {
  if (!path) {
    return <>loading...</>;
  }

  return (
    <div>
      <ul>
        {path.map(({ id, topic }, index) => (
          <li key={id} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            {topic}
            {index !== path.length - 1 ? <HiOutlineChevronRight /> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
