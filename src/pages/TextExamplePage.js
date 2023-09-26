import { TEXT_AND_CONTENT } from "../language/textAndContent";

const TextExamplePage = () => {
  // deconstructs the TEXT_AND_CONTENT
  const { SEA_VEHICLES_PAGE } = TEXT_AND_CONTENT;
  const { MOTOR_BOAT, JET_SKI } = TEXT_AND_CONTENT.SEA_VEHICLES_PAGE;
  return (
    <>
      <h1>{SEA_VEHICLES_PAGE.HEADLINE}</h1>
      <h2>{MOTOR_BOAT.HEADLINE}</h2>
      <p>{MOTOR_BOAT.TEXT}</p>
      <img src={MOTOR_BOAT.IMAGE} />
      <h2>{JET_SKI.HEADLINE}</h2>
      <p>{JET_SKI.TEXT}</p>
      <img src={JET_SKI.IMAGE} />
    </>
  );
};

export default TextExamplePage;
