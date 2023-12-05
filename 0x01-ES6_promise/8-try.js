export default function divideFunction(numerator, denominator) {
  let result;
  try {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    } else {
        result = numerator / denominator;
      }
  }
  catch(err) {
    console.log(err.message);
  }
  return result;
}
