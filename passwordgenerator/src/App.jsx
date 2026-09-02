import { useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (includeNumbers) {
      characters += "0123456789";
    }

    if (includeCharacters) {
      characters += "!@#$%^&*()_+-=[]{}";
    }

    let generatedPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(
          Math.random() * characters.length
      );

      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
    setCopied(false);
  };

  const copyPassword = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
      <div>
        <h1>Password Generator</h1>

        {/* Password */}
        <div>
          <input
              type="text"
              value={password}
              readOnly
          />

          <button onClick={copyPassword} disabled={!password}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Length */}
        <div>
          <label>
            Length: {length}
          </label>

          <input
              type="range"
              min="4"
              max="32"
              value={length}
              onChange={(e) =>
                  setLength(Number(e.target.value))
              }
          />
        </div>

        {/* Numbers */}
        <div>
          <label>
            <input
                type="checkbox"
                // checked={includeNumbers}
                onChange={(e) =>
                    setIncludeNumbers(e.target.checked)
                }
            />

            Include Numbers
          </label>
        </div>

        {/* Characters */}
        <div>
          <label>
            <input
                type="checkbox"
                checked={includeCharacters}
                onChange={(e) =>
                    setIncludeCharacters(e.target.checked)
                }
            />

            Include Characters
          </label>
        </div>

        {/* Generate */}
        <button onClick={generatePassword}>
          Generate Password
        </button>
      </div>
  );
}

export default PasswordGenerator;