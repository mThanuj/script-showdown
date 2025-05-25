import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const messages = [
  `console.log('Welcome to the Arena!');`,
  `function conquer() {\n  return 'Victory';\n}`,
  `async function battle() {\n  const champ = await compete();\n  console.log(champ);\n}`,
  `let champion = await compete();`,
  `for (let i = 3; i > 0; i--) {\n  console.log(\`Starting in \${i}...\`);\n}\nconsole.log('Go!');`,
  `const wait = ms => new Promise(res => setTimeout(res, ms));\n\n(async () => {\n  await wait(1000);\n  console.log('1 second later...');\n})();`,
  `class Champion {\n  constructor(name) {\n    this.name = name;\n  }\n  win() {\n    return \`\${this.name} is victorious!\`;\n  }\n}`,
  `const [first, ...others] = ['Arena', 'Battle', 'Victory'];\nconsole.log(\`First mode: \${first}\`);\nconsole.log('Other modes:', others);`,
  `const result = score > 100 ? 'Legend' : 'Rookie';\nconsole.log(\`You are a \${result}\`);`,
  `function factorial(n) {\n  return n <= 1 ? 1 : n * factorial(n - 1);\n}\nconsole.log(factorial(5)); // 120`,
  `try {\n  riskyOperation();\n} catch (e) {\n  console.error('Oops:', e.message);\n}`,
  `const players = ['Alice','Bob','Charlie'];\nconst winners = players\n  .filter((_, i) => i % 2 === 0)\n  .map(name => \`\${name} wins!\`);\nwinners.forEach(w => console.log(w));`,
];

const getRandomIndex = (exclude: number) => {
  let idx = Math.floor(Math.random() * messages.length);
  if (idx === exclude) {
    idx = (exclude + 1) % messages.length;
  }
  return idx;
};

const TypingText = ({ style }: { style?: React.CSSProperties }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [messageIndex, setMessageIndex] = useState(() => 0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[messageIndex];
    let timeout: number;

    if (isDeleting) {
      timeout = window.setTimeout(() => {
        setCharIndex((ci) => ci - 1);
        setDisplayedText(currentMessage.slice(0, charIndex - 1));
      }, 50);
    } else {
      timeout = window.setTimeout(() => {
        setCharIndex((ci) => ci + 1);
        setDisplayedText(currentMessage.slice(0, charIndex + 1));
      }, 100);
    }

    if (!isDeleting && charIndex === currentMessage.length) {
      clearTimeout(timeout);
      timeout = window.setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setMessageIndex((mi) => getRandomIndex(mi));
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, messageIndex]);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      sx={{
        fontFamily: "Source Code Pro, monospace",
        fontSize: "1rem",
        color: "#00ff88",
        backgroundColor: "rgba(30, 30, 30, 0.9)",
        borderRadius: 1,
        p: 2,
        whiteSpace: "pre-wrap",
        minHeight: "4rem",
        lineHeight: 1.4,
      }}
      style={style}
    >
      {displayedText}
      <Box
        component="span"
        sx={{
          display: "inline-block",
          width: "8px",
          height: "1em",
          backgroundColor: "#00ff88",
          ml: 0.5,
          verticalAlign: "bottom",
          animation: "blink 1s step-start infinite",
        }}
      />
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </Box>
  );
};

export default TypingText;
