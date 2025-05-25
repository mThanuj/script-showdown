import { PlayForWork } from "@mui/icons-material";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Divider,
  ButtonGroup,
} from "@mui/material";
import { motion } from "framer-motion";
import TypingText from "../components/dashboard/TypingText";

const modeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.2, ease: "easeOut" },
  }),
  hover: { scale: 1.02 },
};

const Dashboard = () => {
  const modes = [
    {
      icon: PlayForWork,
      name: "Play Python",
      description: "1v1 match in Python—test your algorithms live.",
    },
    {
      icon: PlayForWork,
      name: "Code Golf",
      description: "Compete to solve challenges with minimal code.",
    },
    {
      icon: PlayForWork,
      name: "Debug Duel",
      description: "Find bugs fastest in head-to-head competitions.",
    },
  ];

  return (
    <Box className="w-screen h-screen bg-gradient-to-tr from-indigo-900 to-white flex items-center justify-center p-6">
      <Paper
        component={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        elevation={8}
        className="w-full max-w-7xl h-[90%] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        <Box className="md:w-2/3 bg-gray-900 flex flex-col">
          <Box className="flex items-center space-x-2 bg-gray-800 p-2">
            <Box className="w-3 h-3 rounded-full bg-red-500" />
            <Box className="w-3 h-3 rounded-full bg-yellow-400" />
            <Box className="w-3 h-3 rounded-full bg-green-500" />
            <Typography variant="subtitle2" className="text-gray-300 ml-4">
              editor.tsx — Dashboard
            </Typography>
          </Box>
          <Divider />
          <Box className="flex-grow p-6 overflow-auto">
            <TypingText
              style={{
                backgroundColor: "rgba(30, 30, 30, 0.9)",
                color: "#00ff88",
                fontFamily: "Source Code Pro, monospace",
                fontSize: "1rem",
                padding: "1rem",
                borderRadius: "0.5rem",
              }}
            />
          </Box>
        </Box>
        <Box className="md:w-1/3 bg-white p-8 flex flex-col">
          <Typography
            component={motion.h3}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            variant="h3"
            className="text-indigo-700 text-center mb-4"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              fontWeight: 700,
            }}
          >
            Game Modes
          </Typography>
          <Stack
            spacing={3}
            className="flex-grow overflow-y-auto flex items-center justify-center"
            my={2}
          >
            {modes.map(({ icon: Icon, name, description }, idx) => (
              <motion.div
                key={name}
                custom={idx}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={modeVariants}
                className="bg-indigo-50 rounded-xl p-4 flex items-start space-x-4 cursor-pointer w-[90%]"
              >
                <Box className="text-indigo-500">
                  <Icon fontSize="large" />
                </Box>
                <Box>
                  <Typography variant="subtitle1" className="font-medium">
                    {name}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {description}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Stack>
          <ButtonGroup
            variant="contained"
            className="mt-6 rounded-lg overflow-hidden self-center"
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              color="primary"
              size="large"
              className="py-2 px-6"
            >
              Start Playing
            </Button>
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              color="secondary"
              size="large"
              className="py-2 px-6"
            >
              Practice Mode
            </Button>
          </ButtonGroup>
        </Box>
      </Paper>
    </Box>
  );
};

export default Dashboard;
