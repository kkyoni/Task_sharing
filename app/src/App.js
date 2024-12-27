import { useEffect } from "react";
import Layouts from "./Components/Layouts/Layouts";
import { useNavigate } from "react-router-dom";
import IdleTimer from "./Auth/IdleTimer";

function App() {
  let Navigate = useNavigate();
  const token = localStorage.getItem("token");
  const logoutHandler = () => {
    try {
      localStorage.clear();
      Navigate("/login");
      window.location.reload();
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      localStorage.clear();
      Navigate("/login");
    }
  }, [Navigate]);

  return (
    <div>
      {token && (
        <>
          <Layouts />
          <IdleTimer logoutHandler={logoutHandler} />
        </>
      )}
    </div>
  );
}

export default App;
