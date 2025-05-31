import React, { useState } from "react";
import { Helmet } from 'react-helmet';
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
                <meta name="description" content="Free safe Text Diff Checker. All content remain local to your browser." />
            </Helmet>
            <h1>Text Diff Checker</h1>
            <p className="subtitle">Free safe Text Diff Checker. All content remain local to your browser.</p>
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