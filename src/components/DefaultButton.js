// This is an example of a default export
const DefaultButton = () => {
  const testLog = () => {
    console.log("Hello World");
  };
  return (
    <>
      <button onClick={testLog}>Default Button</button>
    </>
  );
};

export default DefaultButton;
