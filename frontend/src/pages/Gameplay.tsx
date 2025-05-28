import { useQueryParams } from "../hooks/useQueryParams.hook";
import { colors, modes } from "../config/constants.config";
import {
  Box,
  Typography,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { motion } from "framer-motion";
import MonacoEditor from "../components/gameplay/Editor";
import { useEffect, useRef, useState } from "react";
import ActionButtons from "../components/gameplay/ActionButtons";
import axiosInstance from "../config/axios.config";
import type { editor } from "monaco-types";

const MotionBox = motion.create(Box);

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

export default function Gameplay() {
  const query = useQueryParams();
  const modeNumber = query.get("mode");
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const [languages, setLanguages] = useState<{ id: number; name: string }[]>(
    [],
  );
  const [selectedLanguage, setSelectedLanguage] = useState<{
    id: number;
    name: string;
  } | null>(null);

  useEffect(() => {
    async function fetchLanguages() {
      try {
        const { data } = await axiosInstance.get("/judge0/languages");
        setLanguages(data.data);
        setSelectedLanguage(data.data[0]);
      } catch (err) {
        console.error(err);
      }
    }
    if (languages.length === 0) fetchLanguages();
  }, [languages]);

  if (!modeNumber) return <Box />;
  const mode = modes[+modeNumber - 1];
  if (!mode) return <Box />;

  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-screen h-screen flex items-center justify-center p-4"
      sx={{ backgroundColor: colors.latte }}
    >
      <Paper
        elevation={6}
        className="w-full max-w-[95rem] h-full rounded-2xl flex flex-col"
        sx={{ backgroundColor: colors.crust }}
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
              gutterBottom
              sx={{ color: colors.mauve, fontWeight: 700, mb: 2 }}
            >
              {mode.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: colors.mauve, lineHeight: 1.6 }}
            >
              {mode.description}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, color: colors.latte }}>
              ACTUAL README
            </Typography>
          </MotionBox>
          <MotionBox
            custom={1}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="w-2/3 p-2 m-2 h-full"
          >
            <Box
              className="w-full h-full rounded-lg flex flex-col"
              sx={{
                backgroundColor: colors.crust,
                color: colors.latte,
                fontFamily: "Source Code Pro, monospace",
                p: 4,
              }}
            >
              <Box sx={{ minWidth: 200, mb: 4 }}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  sx={{
                    backgroundColor: colors.crust,
                    borderRadius: 2,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: colors.mauve,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: colors.peach,
                    },
                    "& .MuiSvgIcon-root": {
                      color: colors.latte,
                    },
                  }}
                >
                  <InputLabel
                    id="language-selector-label"
                    sx={{
                      color: colors.latte,
                      "&.Mui-focused": { color: colors.peach },
                    }}
                  >
                    Language
                  </InputLabel>
                  <Select
                    labelId="language-selector-label"
                    value={selectedLanguage?.id || ""}
                    onChange={(e) => {
                      const id = Number(e.target.value);
                      const lang = languages.find((l) => l.id === id);
                      if (lang) setSelectedLanguage(lang);
                    }}
                    label="Language"
                    sx={{
                      color: colors.latte,
                      backgroundColor: colors.crust,
                      "& .MuiSelect-icon": {
                        color: colors.latte,
                      },
                    }}
                  >
                    {languages.map((lang) => (
                      <MenuItem
                        key={lang.id}
                        value={lang.id}
                        sx={{
                          color: colors.crust,
                          backgroundColor: colors.latte,
                          "&:hover": {
                            backgroundColor: colors.peach,
                            color: colors.crust,
                          },
                        }}
                      >
                        {lang.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ flex: 1 }}>
                {selectedLanguage && (
                  <MonacoEditor
                    editorRef={editorRef}
                    selectedLanguage={selectedLanguage.name
                      .split(" ")[0]
                      .toLowerCase()}
                  />
                )}
              </Box>
            </Box>
          </MotionBox>
        </Box>
        <Box className="p-4 bg-gray-900 flex justify-end">
          <ActionButtons
            editorRef={editorRef}
            selectedLanguageId={selectedLanguage?.id || 102}
          />
        </Box>
      </Paper>
    </Box>
  );
}
