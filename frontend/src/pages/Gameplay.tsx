import { useQueryParams } from "../hooks/useQueryParams.hook";
import { modes } from "../config/constants.config";
import { Box, Typography, Paper, Button, ButtonGroup } from "@mui/material";
import { motion } from "framer-motion";
import MonacoEditor from "../components/gameplay/Editor";

const MotionBox = motion.create(Box);

const colors = {
  latte: "#eff1f5",
  crust: "#191c23",
  peach: "#ffd7a0",
  blue: "#8aadf4",
  green: "#a6da95",
  mauve: "#c6a0f6",
};

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const sectionVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + i * 0.2, ease: "easeOut" },
  }),
};

const Gameplay = () => {
  const query = useQueryParams();
  const modeNumber = query.get("mode");
  if (!modeNumber) return <Box />;
  const mode = modes[+modeNumber - 1];

  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-screen h-screen flex items-center justify-center bg-latte p-4"
      style={{ backgroundColor: colors.latte }}
    >
      <Paper
        elevation={6}
        className="w-full max-w-[95rem] h-full rounded-2xl flex flex-col"
        style={{ backgroundColor: colors.crust }}
      >
        <Box className="flex flex-1 overflow-hidden">
          <MotionBox
            custom={0}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="w-1/3 p-6 overflow-auto"
          >
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ color: colors.peach, fontWeight: 700, mb: 2 }}
              style={{ color: colors.mauve }}
            >
              {mode.name}
            </Typography>
            <Typography
              variant="body2"
              component="div"
              sx={{ color: colors.mauve, lineHeight: 1.6 }}
              style={{ color: colors.mauve }}
            >
              {mode.description}
            </Typography>
            <div style={{ color: colors.latte }}>ACTUAL README</div>
          </MotionBox>
          <MotionBox
            custom={1}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="w-2/3 p-2 m-2 h-full"
            style={{
              backgroundColor: "transparent",
            }}
          >
            <Box
              className="w-full h-full rounded-lg"
              style={{
                backgroundColor: colors.crust,
                color: colors.latte,
                fontFamily: "Source Code Pro, monospace",
                padding: "1rem",
              }}
            >
              <MonacoEditor />
            </Box>
          </MotionBox>
        </Box>

        <Box className="p-4 bg-gray-900 flex justify-end">
          <ButtonGroup
            variant="contained"
            className="rounded-lg overflow-hidden"
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              style={{ backgroundColor: colors.green, color: colors.crust }}
            >
              Run Code
            </Button>
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              style={{ backgroundColor: colors.peach, color: colors.crust }}
            >
              Submit
            </Button>
          </ButtonGroup>
        </Box>
      </Paper>
    </Box>
  );
};

export default Gameplay;
