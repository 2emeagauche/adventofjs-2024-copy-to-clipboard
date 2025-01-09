import { Check, Clipboard } from "./components/Svgs";
import { useState, useRef, useEffect } from "react";
import Tooltip from "./components/Tooltip";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let timeoutId = null;
    const delayHover = () => {
      timeoutId = setTimeout(() => {
        setCopied(() => false);
        inputRef.current.value = "";
        inputRef.current.focus();
      }, 2000);
    };
    delayHover();
    return () => clearTimeout(timeoutId);
  }, [copied]);

  const inputRef = useRef(null);

  const handleCopy = () => {
    const textToCopy = inputRef.current.value.trim();
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(
        () => {
          setCopied(true);
        },
        () => {}
      );
    }
  };

  return (
    <div className="App">
      <h1>Copy to clipboard</h1>
      <div className="inputBlock">
        <input
          type="text"
          ref={inputRef}
          onFocus={(e) => {
            e.target.value = "";
          }}
        />
        <div className={`buttonBlock ${hover || copied ? "active" : ""}`}>
          <button
            id="copyButton"
            onClick={handleCopy}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            {copied ? <Check /> : <Clipboard />}
          </button>
          <Tooltip tooltipText={copied ? "Copied!" : "Copy"} />
        </div>
      </div>
    </div>
  );
}
