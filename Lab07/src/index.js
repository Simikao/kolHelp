const status = true;
const runFunc = (a) => a;
const runFunc2 = (a) => a;

switch(status) {
    case 'Completed':
      runFunc();
      break;
    case 'Running':
      runFunc2();
      break;
    default:
        break;
}

const isPositive = () => {
  return true;
};

isPositive(2); // Output: true
isPositive(-3); // Output: false