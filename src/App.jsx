// // import React from "react";
// // // import Welcome from "./pages/Welcome";
// // import "./styles/main.css";
// // import StepOne from "./pages/StepOne"
// // import StepTwo from "./pages/StepTwo";

// // const App = () => {
// //   return (
// //     <div className="App">
// //       {/* <Welcome /> */}
// //       <StepOne/>
// //     </div>
// //   );
// // };

// // export default App;




// // import React, { useState } from "react";
// // import StepOne from "./psges/StepOne";
// // import StepTwo from "./pages/StepTwo"; // Импортируйте следующий компонент

// // const Quiz = () => {
// //   const [currentStep, setCurrentStep] = useState(1);

// //   const handleNext = () => {
// //     setCurrentStep((prevStep) => prevStep + 1);
// //   };

// //   return (
// //     <div>
// //       {currentStep === 1 && <StepOne onNext={handleNext} />}
// //       {currentStep === 2 && <StepTwo />} {/* Здесь вставьте ваш следующий компонент */}
// //       {/* Добавьте другие шаги по необходимости */}
// //     </div>
// //   );
// // };

// // export default Quiz;




// import React, { useState } from "react";
// import Welcome from "./pages/Welcome";
// import StepOne from "./pages/StepOne";
// import "./styles/main.css";

// const App = () => {
//   const [currentStep, setCurrentStep] = useState(1);

//   const handleNextStep = () => {
//     setCurrentStep((prevStep) => prevStep + 1);
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         // return <Welcome onNext={handleNextStep} />;
//       case 2:
//         return <StepOne onNext={handleNextStep} />;
//       default:
//         // return <Welcome onNext={handleNextStep} />;
//         case 3:
//           return <StepTwo onNext={handleNextStep} />;
//           case 4:
//             return <StepThree onNext={handleNextStep} />;
//             case 5:
//               return <StepFour onNext={handleNextStep} />;
//     }
//   };

//   return (
//     <div className="App">
//       {renderStep()}
//     </div>
//   );
// };

// export default App;






import React, { useState } from "react";
// import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo"; // Убедитесь, что этот импорт правильный
import StepThree from "./pages/StepThree"; // Если есть StepThree
import StepFour from "./pages/StepFour"; // Если есть StepFour
import Thanks from "./pages/Thanks";
import "./styles/main.css";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        // return <Welcome onNext={handleNextStep} />;
      case 2:
        return <StepOne onNext={handleNextStep} />;
      case 3:
        return <StepTwo onNext={handleNextStep} />;
      case 4:
        return <StepThree onNext={handleNextStep} />;
      case 5:
        return <StepFour onNext={handleNextStep} />;
      default:
        case 6: 
        return <Thanks/> ;
        // return <Welcome onNext={handleNextStep} />;
    }
  };

  return (
    <div className="App">
      {renderStep()}
    </div>
  );
};

export default App;

