import { useState } from "react";
import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";
import { UncontrolledModal } from "./UncontrolledModal";
import { ControlledModal } from "./ControlledModal";

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
    </>
  );
}

export default App;
