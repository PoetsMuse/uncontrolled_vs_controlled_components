import { useState } from "react";
import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";
import { UncontrolledModal } from "./UncontrolledModal";
import { ControlledModal } from "./ControlledModal";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

const StepOne = ({goToNext}) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({name: 'John Doe'})}>Next</button>
  </>
);
const StepTwo = ({goToNext}) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({age: 40})}>Next</button>
  </>
);
const StepThree = ({goToNext}) => (
  <>
    <h1>Step 3</h1>
    <p>Congratulations! You qualify for our senior discount!</p>
    <button onClick={() => goToNext({})}>Next</button>
  </>
);
const StepFour = ({goToNext}) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({hairColor: "brown"})}>Next</button>
  </>
);


function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const onNext = (stepData) => {
    setOnboardingData({...onboardingData, ...stepData});
    setCurrentIndex(currentIndex + 1)
  };

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

      <UncontrolledOnboardingFlow onFinish={data => {
        console.log(data);
        alert('Onboarding complete');
        }}>
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
      </UncontrolledOnboardingFlow>

      <ControlledOnboardingFlow 
        onFinish={data => {
        console.log(data);
        alert('Onboarding complete');
        }} currentIndex={currentIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>
    </>
  );
}

export default App;
