import { textAndContent } from "../textAndContent/textAndContent";

const TextExamplePage = () => {
  const { seaVehiclesPage } = textAndContent;
  const { motorBoat, jetSki } = textAndContent.seaVehiclesPage;
  return (
    <>
      <h1>{seaVehiclesPage.headline}</h1>
      <h2>{motorBoat.headline}</h2>
      <p>{motorBoat.text}</p>
      <img src={motorBoat.image} />
      <h2>{jetSki.headline}</h2>
      <p>{jetSki.text}</p>
      <img src={jetSki.image} />
    </>
  );
};

export default TextExamplePage;
