// default imports
import DefaultParagraph from "../components/DefaultParagraph";
import DefaultButton from "../components/DefaultButton";

// specific imports
import {
  SpecificParagraphOne,
  SpecificParagraphTwo,
} from "../components/SpecificExports";

const LandingPage = () => {
  return (
    <>
      <header>
        <h1>React lessons</h1>
      </header>
      <DefaultParagraph />
      <SpecificParagraphOne />
      <SpecificParagraphTwo />
      <DefaultButton />
      <footer>
        <p>contact info:</p>
      </footer>
    </>
  );
};

export default LandingPage;
