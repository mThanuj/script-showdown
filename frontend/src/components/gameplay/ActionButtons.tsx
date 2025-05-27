import { Button, ButtonGroup } from "@mui/material";
import { motion } from "framer-motion";
import { colors } from "../../config/constants.config";
import axiosInstance from "../../config/axios.config";

const ActionButtons = ({
  editorRef,
  selectedLanguageId,
}: {
  editorRef: any;
  selectedLanguageId: number;
}) => {
  const handleRunCode = async () => {
    const code = editorRef.current.getValue();
    const response = await axiosInstance.post("/judge0/execute", {
      source_code: code,
      language_id: selectedLanguageId,
    });

    console.log(code, response);
  };

  const handleSubmit = () => {
    console.log(editorRef.current.getValue());
  };

  return (
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
        onClick={handleRunCode}
      >
        Run Code
      </Button>
      <Button
        component={motion.button}
        whileHover={{ scale: 1.05 }}
        style={{ backgroundColor: colors.peach, color: colors.crust }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </ButtonGroup>
  );
};

export default ActionButtons;
