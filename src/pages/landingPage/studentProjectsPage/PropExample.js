export const PropExample = (props) => {
  const { headline, bananSkall, num1, num2 } = props;

  console.log(num1 + num2);

  return (
    <section>
      <h1>{headline}</h1>
      <p>{bananSkall}</p>
    </section>
  );
};
