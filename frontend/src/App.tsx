import { useEffect } from "react";
import { useSocketStore } from "./stores/socketStore";

const App = () => {
  const { connect } = useSocketStore();

  useEffect(() => {
    connect();
  }, [connect]);

  return <div>Apps</div>;
};

export default App;
