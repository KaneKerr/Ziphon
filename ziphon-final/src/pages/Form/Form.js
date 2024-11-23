import { useState } from "react";
import "./form.css";
import { useForm } from "react-hook-form";
import Step1 from "../../components/form-components/FormStep1";
import Step2 from "../../components/form-components/FormStep2";
import Step3 from "../../components/form-components/FormStep3";
import Step4 from "../../components/form-components/FormStep4";


function Forms() {
  const { register, handleSubmit, errors } = useForm();
  const [step, setStep] = useState(1);
  //const [formValues, setFormValues] = useState({});
  const [formValues, setFormValues] = useState({});
  var step1
  var step2 
  var step3
  var step4 

  if (step === 1) {
  step1 = "step-wizard-item current-item";
  step2 = "step-wizard-item";
  step3 = "step-wizard-item";
  step4 = "step-wizard-item";
  } else if (step === 2) {
  step1 = "step-wizard-item"
  step2 = "step-wizard-item current-item";
  step3 = "step-wizard-item";
  step4 = "step-wizard-item";
  } else if (step === 3) {
  step1 = "step-wizard-item";
  step2 = "step-wizard-item";
  step3 = "step-wizard-item current-item";
  step4 = "step-wizard-item";
  } else if (step=== 4) {
  step1 = "step-wizard-item";
  step2 = "step-wizard-item";
  step3 = "step-wizard-item";
  step4 = "step-wizard-item current-item";
  }
  
  return (
    <div>
      <div className="containerForm">
        <div className="Form_box">
          <p className="Fheader" id="Form">
            <strong>Energy Consumption</strong>
          </p>
          <p className="Fheader">Add your details below</p>
          <br/>
          <ul className="step-wizard-list">
            <li className={step1}>
                <span class="progress-count">1</span>
                <span class="progress-label">Page 1</span>
            </li>
            <li className={step2}>
                <span className="progress-count">2</span>
                <span className="progress-label">Page 2</span>
            </li>
            <li className={step3}>
                <span className="progress-count">3</span>
                <span class="progress-label">Page 3</span>
            </li>
            <li className={step4}>
                <span className="progress-count">4</span>
                <span className="progress-label">Page 4</span>
            </li>
        </ul>
        <br/>

          {step === 1 && (
            <Step1
              setStep={setStep}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          )}

          {step === 2 && (
            <Step2
              setStep={setStep}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          )}

          {step === 3 && (
            <Step3
              setStep={setStep}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          )}

          {step === 4 && (
            <Step4
              setStep={setStep}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          )}

        </div>
      </div>
    </div>
  );
}

export default Forms;
