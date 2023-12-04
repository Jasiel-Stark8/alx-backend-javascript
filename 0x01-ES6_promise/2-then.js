export default function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
        return { status: 200, body: 'success' };
    })
    .catch((error) => {
        return new Error('Error');
    });
}
