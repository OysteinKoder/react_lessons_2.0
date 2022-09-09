import { useState } from "react";
import { StyledMain } from "../../components/styles";

const PantePersonSelectorPage = () => {
  const [pantePerson, setPantePerson] = useState("Her kommer panteper");
  const [pantePerson2, setPantePerson2] = useState("Her kommer pantejenny");
  let [newPantePerson, setNewPantePerson] = useState("");
  let [pantePersonList, setPantePersonList] = useState([
    "Morthen",
    "Knut",
    "Morten",
    "Emil",
    "Margrethe",
    "Stian",
    "Øystein",
  ]);

  const addclick = (e) => {
    e.preventDefault();
    if (newPantePerson.trim().length !== 0) {
      setPantePersonList([...pantePersonList, newPantePerson]);
      setNewPantePerson("");
    }
  };

  function handleclick() {
    console.log([...pantePersonList]);
    let vinner =
      pantePersonList[Math.floor(Math.random() * pantePersonList.length)];
    setPantePerson(vinner);
    let vinInd = pantePersonList.indexOf(vinner);
    pantePersonList.splice(vinInd, 1);
    let vinner2 =
      pantePersonList[Math.floor(Math.random() * pantePersonList.length)];
    setPantePerson2(vinner2);
    let vinInd2 = pantePersonList.indexOf(vinner2);
    pantePersonList.splice(vinInd2, 1);
    setPantePersonList(pantePersonList);
  }

  const removeItem = (index) => {
    setPantePersonList(pantePersonList.filter((o, i) => index !== i));
  };

  return (
    <StyledMain>
      <h2>Pante Selector</h2>
      <article>
        <p>this is the pante selector page</p>
        <button onClick={handleclick}>Velg PantePerson</button>
        <p>{pantePerson}</p>
        <p>{pantePerson2}</p>

        <form onSubmit={addclick}>
          <input
            onChange={(e) => setNewPantePerson(e.target.value)}
            value={newPantePerson}
          ></input>
          <button type="submit">Add to panteList</button>
        </form>

        <p>Liste over eligible Pantepersoner</p>
        <ul>
          {pantePersonList.map((x, idx) => (
            <li>
              {idx}. {x} <button onClick={() => removeItem(idx)}>Remove</button>
            </li>
          ))}
        </ul>
      </article>
    </StyledMain>
  );
};

export default PantePersonSelectorPage;
