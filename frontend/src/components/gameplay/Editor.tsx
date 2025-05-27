import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import axiosInstance from "../../config/axios.config";

type SnippetMap = { [language: string]: string };

const MonacoEditor = ({
  editorRef,
  selectedLanguage,
}: {
  editorRef: any;
  selectedLanguage: string;
}) => {
  const [snippets, setSnippets] = useState<SnippetMap>({});

  const snippet = snippets[selectedLanguage] ?? "";

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const {
          data: { data: fetchedSnippets },
        } = await axiosInstance.get<{
          data: SnippetMap;
        }>("/judge0/snippets");

        setSnippets(fetchedSnippets);
      } catch (error) {
        console.error("Error loading snippets:", error);
      }
    };

    fetchSnippets();
  }, []);

  return (
    <Editor
      theme="vs-dark"
      height="100%"
      language={selectedLanguage}
      value={snippet}
      onMount={(editor) => {
        editorRef.current = editor;
        editor.focus();
      }}
      options={{
        cursorStyle: "block",
        fontSize: 20,
        quickSuggestions: false,
        contextmenu: false,
      }}
    />
  );
};

export default MonacoEditor;
