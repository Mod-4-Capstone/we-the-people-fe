const postReps = (newQuizResult, type) => {
  return fetch(`https://we-the-people-be.herokuapp.com/api/v2/${type}_with_quiz`, {
    method: 'POST',
    body: JSON.stringify(newQuizResult),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(response => response.json())
}

export { postReps }
