import React from 'react';
import { useRouter } from 'next/router';
import { getPollList } from '../services';
import { Button, Container, ListItem } from '../components';

export default function Home({ questions }) {
  const router = useRouter();

  return (
    <Container direction="column" justifyContent="center" alignItems="center">
      <Button onClick={() => router.push('/questions/create')}>Add New Question</Button>

      {questions.map((item, index) => (
        <ListItem key={index} question={item.question} url={item.url} />
      ))}
    </Container>
  );
}

export const getServerSideProps = async () => {
  const questions = await getPollList();

  return {
    props: {
      questions,
    },
  };
};
