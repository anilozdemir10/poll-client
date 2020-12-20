const BASE_API_URL = 'https://polls.apiblueprint.org';

function getQuestionUrl() {
  return fetch(BASE_API_URL).then(data => data.json());
}

export function getPollList() {
  return getQuestionUrl().then(res => fetch(BASE_API_URL + res.questions_url).then(data => data.json()));
}

export function getPollDetail(id) {
  return getQuestionUrl().then(res => fetch(BASE_API_URL + res.questions_url + '/' + id).then(data => data.json()));
}

export function createNewPoll(body) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };

  return getQuestionUrl().then(res =>
    fetch(BASE_API_URL + res.questions_url, requestOptions).then(data => data.json()),
  );
}

export function voteOnChoice(url) {
  const requestOptions = {
    method: 'POST',
    headers: { Accept: 'application/json' },
  };

  return fetch(BASE_API_URL + url, requestOptions).then(data => data.json);
}
