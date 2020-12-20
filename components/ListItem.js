import styled from 'styled-components';
import Link from 'next/link';

const ListItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  margin: 10px;
  width: 40%;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    background-color: #e2eaec;
  }
`;

const ListItem = ({ question, url }) => {
  return (
    <Link href={url}>
      <ListItemContainer>{question}</ListItemContainer>
    </Link>
  );
};

export default ListItem;
