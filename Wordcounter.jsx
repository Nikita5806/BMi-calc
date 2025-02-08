import { useState } from "react";
import "./App.css"; // Make sure this import is present to link to the CSS

export default function App() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const characterCount = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;

  return (
    <div className="app-container">
      <h1 className="title">Shabdo ki gintiyaa</h1>
      <p className="subtitle">Tum likhoo, Hum ginege..</p>

      <div className="content-container">
        {/* Text Input Area */}
        <textarea
          className="text-input"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={handleTextChange}
        ></textarea>

        {/* Results Section */}
        <div className="results-container">
          <h2 className="results-title">Results</h2>
          <p className="results-text">Characters: <span className="results-value">{characterCount}</span></p>
          <p className="results-text">Sentences: <span className="results-value">{sentenceCount}</span></p>
        </div>
      </div>

      {/* Button */}
      <button className="submit-button">
       Submit
      </button>
    </div>
  );
}
