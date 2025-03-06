const generateRandomTsCode = () => {
  const num = Math.floor(Math.random() * 10);
  if (num < 5) {
    return `console.log("Hello World");`;
  } else {
    return `let x = ${num} + 1; console.log(x);`;
  }
};
