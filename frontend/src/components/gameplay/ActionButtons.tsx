import { useState, type RefObject } from "react";
import { Button, ButtonGroup, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import { colors } from "../../config/constants.config";
import axiosInstance from "../../config/axios.config";
import type { editor } from "monaco-types";

interface ActionButtonsProps {
  editorRef: RefObject<editor.IStandaloneCodeEditor | null>;
  selectedLanguageId: number;
}

const ActionButtons = ({
  editorRef,
  selectedLanguageId,
}: ActionButtonsProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRunCode = async () => {
    if (!editorRef.current) {
      return;
    }

    setIsRunning(true);
    try {
      const code = editorRef.current.getValue();
      const response = await axiosInstance.post("/judge0/execute", {
        source_code: code,
        language_id: selectedLanguageId,
      });
      console.log("Run response:", response.data);
    } catch (err) {
      console.error("Run error:", err);
    } finally {
      setIsRunning(false);
    }
  };

  const handleSubmit = async () => {
    if (!editorRef.current) {
      return;
    }

    setIsSubmitting(true);
    try {
      const code = editorRef.current.getValue();
      const response = await axiosInstance.post("/judge0/execute", {
        source_code: code,
        language_id: selectedLanguageId,
      });
      console.log("Submit response:", response.data);
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ButtonGroup
      variant="contained"
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 3,
      }}
    >
      <Button
        component={motion.button}
        whileHover={{ scale: isRunning ? 1 : 1.05 }}
        onClick={handleRunCode}
        disabled={isRunning || isSubmitting}
        startIcon={isRunning ? <CircularProgress size={20} /> : undefined}
        sx={{
          backgroundColor: colors.green,
          color: colors.crust,
          px: 4,
        }}
      >
        {isRunning ? "Running..." : "Run Code"}
      </Button>

      <Button
        component={motion.button}
        whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
        onClick={handleSubmit}
        disabled={isSubmitting || isRunning}
        startIcon={isSubmitting ? <CircularProgress size={20} /> : undefined}
        sx={{
          backgroundColor: colors.peach,
          color: colors.crust,
          px: 4,
        }}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </ButtonGroup>
  );
};

export default ActionButtons;
