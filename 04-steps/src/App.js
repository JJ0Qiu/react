import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }

  function handleNext() {
    if (step < messages.length) setStep((step) => step + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              handler={handlePrevious}
              textColor={"#fff"}
              bgColor={"#7950f2"}
            >
              <span>👈</span>Previous
            </Button>
            <Button handler={handleNext} textColor={"#fff"} bgColor={"#7950f2"}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ handler, textColor, bgColor, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={handler}
    >
      {children}
    </button>
  );
}
