const generateNumber = (start = 0, end = 10) => (
  Math.floor(Math.random() * (end - start + 1)) + start
);

export default generateNumber;
