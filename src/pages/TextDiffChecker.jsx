import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import DiffResult from "../components/DiffResult";
import "../styles.css";

export default function TextDiffChecker() {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    const handleSwap = () => {
        setText1((prev) => {
            setText2(prev2 => {
                return prev;
            });
            return text2;
        });
    };

    return (
        <div className="container">
            <Helmet>
                <title>Compare Text Online | Text Diff Checker</title>
                <meta name="description" content="Free online Text Diff Checker. Compare two texts and see the differences clearly highlighted." />
            </Helmet>
            <h1>Text Diff Checker</h1>
            <p className="subtitle">Compare and highlight differences between two texts</p>
            <div className="textarea-container">
                <textarea
                    value={text1}
                    onChange={(e) => setText1(e.target.value)}
                    placeholder="Enter first text here..."
                ></textarea>
                <button onClick={handleSwap} style={{ marginBottom: "auto" }}>
                    🔁
                </button>
                <textarea
                    value={text2}
                    onChange={(e) => setText2(e.target.value)}
                    placeholder="Enter second text here..."
                ></textarea>
            </div>
            <DiffResult text1={text1} text2={text2} />
        </div>
    );
}