const postRepsWithQuiz = (newQuizResult) => {
  return fetch('https://we-the-people-be.herokuapp.com/api/v1/zipcode_with_quiz', {
    method: 'POST',
    body: JSON.stringify({
      newQuizResult
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(response => response.json())
}

export { postRepsWithQuiz }