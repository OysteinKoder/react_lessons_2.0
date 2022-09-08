import { useState } from "react";
import { StyledMain } from "../../components/styles";

const PantePersonSelectorPage = () => {
  const [pantePerson, setPantePerson] = useState("Her kommer panteper");
  const [pantePerson2, setPantePerson2] = useState("Her kommer pantejenny");
  let [pantePersonList, setPantePersonList] = useState([
    "Morthen",
    "Knut",
    "Morten",
    "Emil",
    "Margrethe",
    "Stian",
    "Emil",
  ]);

  function handleclick() {
    console.log([...pantePersonList]);
    let vinner =
      pantePersonList[Math.floor(Math.random() * pantePersonList.length)];
    setPantePerson(vinner);
    console.log(vinner);
    let vinInd = pantePersonList.indexOf(vinner);
    pantePersonList.splice(vinInd, 1);
    setPantePersonList(pantePersonList);
    let vinner2 =
      pantePersonList[Math.floor(Math.random() * pantePersonList.length)];
    setPantePerson2(vinner2);
    console.log(vinner2);
    let vinInd2 = pantePersonList.indexOf(vinner2);
    pantePersonList.splice(vinInd2, 1);
    setPantePersonList(pantePersonList);
    console.log(vinInd);
    console.log(vinInd2);
  }
  pantePersonList.map((item, idx) => {
    return <li>{pantePersonList.item}</li>;
  });

  return (
    <StyledMain>
      <h2>Pante Selector</h2>
      <article>
        <p>this is the pante selector page</p>
        <button onClick={handleclick}>Velg PantePerson</button>
        <p>{pantePerson}</p>
        <p>{pantePerson2}</p>
        <ul>{pantePersonList}</ul>
      </article>
    </StyledMain>
  );
};

export default PantePersonSelectorPage;
