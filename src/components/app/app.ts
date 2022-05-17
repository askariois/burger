import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { loadIngredients } from "../../services/actions";
import ModalSwitch from "../modal-switch/modal-switch";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadIngredients());
  }, [dispatch]);

  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

export default App;
