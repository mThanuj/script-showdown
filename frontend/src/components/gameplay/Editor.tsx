import Editor from "@monaco-editor/react";
import { useEffect, useRef } from "react";

const MonacoEditor = () => {
  const editorRef = useRef<unknown | null>(null);

  useEffect(() => {
    console.log(editorRef.current);
  }, [editorRef]);

  return (
    <Editor
      theme="vs-dark"
      height="100%"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      onMount={(editor) => {
        editorRef.current = editor;
        editor.focus();

        editor.onKeyDown((event) => {
          const { keyCode, ctrlKey, metaKey } = event;
          if ((keyCode === 33 || keyCode === 52) && (metaKey || ctrlKey)) {
            event.preventDefault();
          }
        });
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
