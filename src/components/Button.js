// This is an example of a default export
const Button = () => {
  const testLog = () => {
    console.log("Hello World");
  };
  return (
    <>
      <button onClick={testLog}>click me</button>
    </>
  );
};

export default Button;
