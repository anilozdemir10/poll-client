import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { createNewPoll } from '../../services';
import { Container, Button, Input, Text, Toaster } from '../../components';

const QuestionCreate = () => {
  const [question, setQuestion] = useState('');
  const [showToaster, setShowToaster] = useState(false);
  const [toasterMessage, setToasterMessage] = useState('');
  const [toasterType, setToasterType] = useState('');
  const [inputs, setInputs] = useState([{ id: 'input-0', value: '' }]);

  const router = useRouter();

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setShowToaster(false);
      }, 2000);
    };
  }, [showToaster]);

  const handleCreateNewPoll = () => {
    const request = {
      question,
      choices: inputs.filter(input => input.value).map(input => input.value),
    };

    if (request.question && request.choices.length > 1) {
      createNewPoll(request).then(() => {
        setShowToaster(true);
        setToasterType('success');
        setToasterMessage('Poll is created succesfully.');
      });
    } else {
      setToasterMessage('Please fill the question and at least two option');
      setShowToaster(true);
      setToasterType('error');
    }
  };

  const appendInput = (event, index) => {
    if (index + 1 === inputs.length) {
      var newInputId = `input-${inputs.length}`;

      const newInputs = inputs.concat([{ id: newInputId, value: event.target.value }]);

      setInputs(newInputs);
    } else {
      inputs[index + 1].value = event.target.value;
    }
  };

  return (
    <Container direction="column" justifyContent="center" alignItems="center">
      <Toaster message={toasterMessage} toasterType={toasterType} isShow={showToaster} />
      <Text fontSize="32" fontWeight="500" marginTop="100">
        Create New Question For Pool
      </Text>
      <Input type="text" onChange={event => setQuestion(event.target.value)} placeholder="Type your question here" />
      {inputs.map((input, index) => (
        <Input
          type="text"
          onChange={event => appendInput(event, index)}
          placeholder="Enter poll option"
          key={input.id}
        />
      ))}

      <Container direction="row" justifyContent="center" alignItems="center">
        <Button buttonType="success" onClick={handleCreateNewPoll}>
          Create
        </Button>
        <Button onClick={() => router.push('/')}>Back</Button>
      </Container>
    </Container>
  );
};
export default QuestionCreate;
