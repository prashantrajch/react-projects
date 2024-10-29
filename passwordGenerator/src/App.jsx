import { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isSpecialCharAllowed, setIsSpecialCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null);
  const buttonRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) letter += "0123456789";
    if (isSpecialCharAllowed) letter += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let charCode = Math.floor(Math.random() * letter.length + 1);
      pass += letter.charAt(charCode);
    }

    setPassword(pass);
  }, [length, isNumberAllowed, isSpecialCharAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password);
    buttonRef.current.innerText = "Copied";
    setTimeout(() => {
      buttonRef.current.innerText = 'Copy';
    }, 2000);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumberAllowed, isSpecialCharAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
            ref={buttonRef}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name="password-range"
              id="password-range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="password-range">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="password-num"
              id="password-num"
              onChange={() => setIsNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="password-num">Numbers</label>
          </div>
          <div className="flex text-sm gap-x-2">
            <input
              type="checkbox"
              name="password-special-char"
              id="password-special-char"
              onChange={() => setIsSpecialCharAllowed((prev) => !prev)}
            />
            <label htmlFor="password-special-char">Special Character</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
