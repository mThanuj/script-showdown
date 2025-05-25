import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const messages = [
  "console.log('Welcome to the Arena!');",
  "function conquer() { return 'Victory'; }",
  "let champion = await compete();",
];

const TypingText = ({ style }: { style?: React.CSSProperties }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[messageIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(currentMessage.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentMessage.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentMessage.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setMessageIndex((messageIndex + 1) % messages.length);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, messageIndex]);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      sx={{
        fontFamily: "monospace",
        fontSize: "1.25rem",
        color: "#1e1e2e",
        backgroundColor: "#cba6f7",
        borderRadius: 2,
        p: 2,
        whiteSpace: "pre-wrap",
        minHeight: "3rem",
      }}
      width={"95%"}
      height={"95%"}
      style={style}
    >
      {displayedText}
      <Box
        component="span"
        sx={{
          display: "inline-block",
          width: "10px",
          height: "1.25rem",
          backgroundColor: "#4B5563",
          ml: "2px",
          animation: "blink 1s step-start infinite",
          verticalAlign: "bottom",
        }}
      />
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </Box>
  );
};

export default TypingText;
