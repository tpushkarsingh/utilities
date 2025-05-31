import React from "react";
import { diffWords } from "diff";

export default function DiffResult({ text1, text2 }) {
  const diff = diffWords(text1, text2);

  return (
    <div className="result-box">
      <h3>Differences:</h3>
      <div className="diff-output">
        {diff.map((part, index) => (
          <span
            key={index}
            style={{
              backgroundColor: part.added
                ? "#d4f8d4"
                : part.removed
                ? "#f8d4d4"
                : "transparent",
              textDecoration: part.removed ? "line-through" : "none",
            }}
          >
            {part.value}
          </span>
        ))}
      </div>
    </div>
  );
}