import { useState } from "react";

const usePassGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = (checkboxData, length) => {
    let charSet = "";
    let generatedPass = "";

    const selectedOptions = checkboxData.filter((data) => data.state);

    if (selectedOptions.length === 0) {
      setErrorMessage("Select atleast one option.");
      setPassword("");
      return;
    }

    selectedOptions.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charSet += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charSet += "1234567890";
          break;
        case "Include Symbols":
          charSet += "~!@#$%^&*()_-=+{}|[]?";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPass += charSet[randomIndex];
    }
    setPassword(generatedPass);
    setErrorMessage("");
    return;
  };

  return { password, errorMessage, generatePassword };
};

export default usePassGenerator;
