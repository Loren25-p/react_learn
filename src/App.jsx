// import Welcome from "./pages/Welcome";
// import StepOne from "./pages/StepOne";
// // import StepTwo from "./pages/StepTwo";
// // import StepThree from "./pages/StepThree";
// // import StepFour from "./pages/StepFour";
// // import Thanks from "./pages/Thanks";

// import "./styles/main.css";

// const App = () => {

//   return (
//     <div className="App">
//       <Welcome />
//       {/* <StepOne /> */}
//     </div>
//   );
// };

// export default App;



import React, { useState } from "react";
import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import "./styles/main.css";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(2); 
  };

  return (
    <div className="App">
      {currentStep === 1 && <Welcome onNext={handleNextStep} />}
      {currentStep === 2 && <StepOne onNext={() => {}} />}
      {}
    </div>
  );
};

export default App;

