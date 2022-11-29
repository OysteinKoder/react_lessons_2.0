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
      <Button />
      <Paragraph />
      <SpecificParagraphOne />
      <SpecificParagraphTwo />
    </>
  );
};

export default LandingPage;
