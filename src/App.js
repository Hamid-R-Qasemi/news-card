import { useState } from "react";
import classes from "./App.module.css";
import Card from "./components/Card/Card";

function App() {
  const [status, setStatus] = useState(1);
  const sliderState = (state) => {
    setStatus(state);
  };
  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <Card />
      </div>
    </div>
  );
}
export default App;
