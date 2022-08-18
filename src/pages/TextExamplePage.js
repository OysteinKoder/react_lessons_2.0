import { textAndContent } from "../textAndContent/textAndContent";

const TextExamplePage = () => {
  const { seaVehiclesPage } = textAndContent;
  return (
    <>
      <h1>{seaVehiclesPage.headline}</h1>
      <h2>{seaVehiclesPage.motorBoat.headline}</h2>
      <p>{seaVehiclesPage.motorBoat.text}</p>
      <img src={seaVehiclesPage.motorBoat.image} />
      <h2>{seaVehiclesPage.jetSki.headline}</h2>
      <p>{seaVehiclesPage.jetSki.text}</p>
      <img src={seaVehiclesPage.jetSki.image} />
    </>
  );
};

export default TextExamplePage;
