import axios from "axios";
import { useEffect, useState } from "react";
import { Login } from "./components/organism/Login";
import { Profile } from "./components/organism/Profile";

function App() {
  const [userLogged, setUserLogged] = useState(null);

  const getUser = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserLogged(response.data);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser();
    }
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      {!userLogged && <Login onLogin={getUser} />}
      {userLogged && <Profile user={userLogged} setUser={setUserLogged} />}
    </div>
  );
}

export default App;
