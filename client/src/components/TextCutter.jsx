import React, { useState, useEffect } from "react";
const TypingEffectComponent = () => {
  const [text, setText] = useState("");
  const [cursor, setCursor] = useState(false);
  const [typing, setTyping] = useState(true);
  const [index, setIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const typingTexts = ["Professional Coder.", "UI/UX Designer.", "Developer."];
  useEffect(() => {
    let intervalId;
    if (typing) {
      intervalId = setInterval(() => {
        if (index < typingTexts[currentTextIndex].length) {
          setText(typingTexts[currentTextIndex].substring(0, index + 1));
          setCursor(true);
          setTimeout(() => {
            setCursor(false);
          }, 200);
          setIndex(index + 1);
        } else {
          setTyping(false);
          setTimeout(() => {
            setCurrentTextIndex((currentTextIndex + 1) % typingTexts.length);
            setIndex(0);
            setTyping(true);
          }, 2000);
        }
      }, 100);
    } else {
      intervalId = setInterval(() => {
        if (index < typingTexts[currentTextIndex].length) {
          if (text.length > 0) {
            setText(text.substring(0, text.length - 1));
          } else {
            setText(typingTexts[currentTextIndex]);
            setTyping(true);
          }
          setCursor(true);
          setTimeout(() => {
            setCursor(false);
          }, 200);
        }
      }, 50);
    }
    return () => clearInterval(intervalId);
  }, [typing, index, text, currentTextIndex]);
  return (
    <div className="space-x-4 pt-4">
      <span>a</span>
      <span
        // className={`text-lg cursor-text	 font-medium ${
        //   cursor ? "animate-pulse" : ""
        // }`}
        className=" font-semibold text-6xl text-black"
      >
        {text}
      </span>
    </div>
  );
};
export default TypingEffectComponent;
