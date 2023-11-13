import { useState } from "react";
import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";
import { UncontrolledModal } from "./UncontrolledModal";
import { ControlledModal } from "./ControlledModal";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";

const StepOne = ({goToNext}) => (
  <>
    <h1>Step 1</h1>
    <button onClick={goToNext}>Next</button>
  </>
);
const StepTwo = ({goToNext}) => (
  <>
    <h1>Step 2</h1>
    <button onClick={goToNext}>Next</button>
  </>
);
const StepThree = ({goToNext}) => (
  <>
    <h1>Step 3</h1>
    <button onClick={goToNext}>Next</button>
  </>
);


function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
    <>
      <ControlledForm />
      <UncontrolledForm />
      <UncontrolledModal />
      <ControlledModal 
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)} 
      >
          <h1>Hello!</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>{shouldShowModal ? 'Hide Controlled Modal' : 'Show Controlled Modal'}</button>

      <UncontrolledOnboardingFlow>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>
    </>
  );
}

export default App;
