import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getPollDetail, voteOnChoice } from '../../services';
import { Container, QuestionDetailContainer, Toaster, RadioButton, Text, Button } from '../../components';

const PollDetailPage = ({ questionDetail, id }) => {
  const [detail, setDetail] = useState(questionDetail);
  const [selectedChoice, setSelectedChoice] = useState('');
  const [showToaster, setShowToaster] = useState(false);
  const [toasterMessage, setToasterMessage] = useState('');
  const [toasterType, setToasterType] = useState('');

  const router = useRouter();

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setShowToaster(false);
      }, 1000);
    };
  }, [showToaster]);

  const handleVote = () => {
    if (selectedChoice) {
      voteOnChoice(selectedChoice).then(() => {
        setShowToaster(true);
        setToasterType('success');
        setToasterMessage('Voted successfully.');
        getDetail();
      });
    } else {
      setToasterMessage('Please select an option');
      setShowToaster(true);
      setToasterType('error');
    }
  };

  const handleSelectionChoice = e => {
    const { value } = e.target;

    setSelectedChoice(value);
  };

  const getDetail = () => {
    getPollDetail(id).then(res => {
      setDetail(res);
    });
  };

  return (
    <Container direction="column" justifyContent="center" alignItems="center">
      <Toaster message={toasterMessage} isShow={showToaster} toasterType={toasterType} />

      <QuestionDetailContainer>
        <Text fontSize="32" fontWeight="500" marginBottom="20">
          {detail?.question}
        </Text>
        {detail?.choices?.map((item, index) => (
          <Container key={item.url} direction="row" justifyContent="space-between" alignItems="center">
            <RadioButton index={index} url={item.url} choice={item.choice} onSelectionChange={handleSelectionChoice} />
            <Text fontWeight="500" fontSize="20">
              {item.votes}
            </Text>
          </Container>
        ))}

        <Container direction="row" justifyContent="center" alignItems="center">
          <Button buttonType="success" onClick={handleVote}>
            Vote
          </Button>
          <Button onClick={() => router.push('/')}>Back</Button>
        </Container>
      </QuestionDetailContainer>
    </Container>
  );
};

export default PollDetailPage;

export const getServerSideProps = async ({ params: { id } }) => {
  const questionDetail = await getPollDetail(id);

  return {
    props: {
      questionDetail,
      id,
    },
  };
};
