// default imports
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

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
      <Button />
      <Paragraph />
      <SpecificParagraphOne />
      <SpecificParagraphTwo />
      <footer>
        <p>contact info:</p>
      </footer>
    </>
  );
};

export default LandingPage;
