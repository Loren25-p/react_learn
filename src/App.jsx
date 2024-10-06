// import React, { useState } from "react";

// import Welcome from "./pages/Welcome";
// import StepOne from "./pages/StepOne";
// import StepTwo from "./pages/StepTwo"; 
// import StepThree from "./pages/StepThree"; 

// import "./styles/main.css";

// const MultiStepForm = () => {
//     const [currentStep, setCurrentStep] = useState(0);

//     const handleNext = () => {
//         setCurrentStep((prevStep) => prevStep + 1);
//     };

//     const handleBack = () => {
//         setCurrentStep((prevStep) => Math.max(prevStep - 1, 0)); 
//     };

//     return (
//         <div>
//             {currentStep === 0 && <Welcome onNext={handleNext} />}
//             {currentStep === 1 && <StepOne onNext={handleNext} onBack={handleBack} />}
//             {currentStep === 2 && <StepTwo onNext={handleNext} onBack={handleBack} />}
//             {currentStep === 3 && <StepThree onBack={handleBack} />}
//         </div>
//     );
// };

// export default MultiStepForm;




import React, { useState } from "react";

import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo"; 
import StepThree from "./pages/StepThree";

import "./styles/main.css";

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        selectedVariant: ''
    });

    const handleNext = () => {
        console.log(`Переход к шагу ${currentStep + 1}`);
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        console.log(`Возврат к шагу ${currentStep - 1}`);
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const handleDataChange = (newData) => {
        console.log('Обновление данных формы:', newData);
        setFormData((prevData) => ({ ...prevData, ...newData }));
    };

    return (
        <div>
            {currentStep === 0 && <Welcome onNext={handleNext} onDataChange={handleDataChange} />}
            {currentStep === 1 && <StepOne onNext={handleNext} onBack={handleBack} onDataChange={handleDataChange} />}
            {currentStep === 2 && <StepTwo onNext={handleNext} onBack={handleBack} onDataChange={handleDataChange} />}
            {currentStep === 3 && <StepThree data={formData} onBack={handleBack} />}
        </div>
    );
};

export default MultiStepForm;
