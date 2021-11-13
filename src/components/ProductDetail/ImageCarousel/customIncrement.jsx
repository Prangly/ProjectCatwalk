const customIncrement = (direction, setter, arr, current) => {
  if (direction === 'up' && current < arr.length - 1) {
    setter(current + 1);
  } else if (direction === 'down' && current > 0) {
    setter(current - 1);
  }
};

export default customIncrement;
