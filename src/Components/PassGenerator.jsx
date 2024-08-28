import { useState } from "react";
import usePassGenerator from "../Hooks/usePassGenerator";
import PasswordStrengthChecker from "./StrengthChecker";
import Button from "./Button";
import CheckBoxes from "./Checkbox";

export default function PassGenerator() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [copied, setCopied] = useState(false);

  const { password, errorMessage, generatePassword } = usePassGenerator();

  const handleCheckboxChange = (i) => {
    const updated = [...checkboxData];
    updated[i].state = !updated[i].state;
    setCheckboxData(updated);
  };

  const handleCopyPass = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="container">
      
      {/* PassWord Text and Copy Button */}

      {password && (
        <div className="header">
          <div className="title">{password}</div>

          <Button
            text={copied ? "Copied" : "Copy"}
            onClick={handleCopyPass}
            customClassName={"copyBtn"}
          />
        </div>
      )}

      {/* Character length Range Bar */}

      <div className="charlength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min={4}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      {/* Checkboxes */}

      <CheckBoxes
        checkboxData={checkboxData}
        handleChange={handleCheckboxChange}
      />

      {/* Strength */}

      <PasswordStrengthChecker password={password} />

      {/* Error Handling */}

      {errorMessage && <div className="errorMessage"> {errorMessage} </div>}

      {/* Generate Button */}

      <Button
        customClassName={"generateBtn"}
        onClick={() => {
          generatePassword(checkboxData, length);
        }}
        text={"Genarate Password"}
      />
    </div>
  );
}
