import React,{useState} from 'react';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../Steps/StepOtp/StepOtp';

const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
};



const Login = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext(){
        setStep(Step + 1);
    }

    return <Step onNext={onNext}></Step>

};

export default Login;
