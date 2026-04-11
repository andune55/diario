
import { useEffect, useState } from "react";
import Login from "./componentes/Login"; // 👈 ajusta ruta si hace falta
import AppContent from "./componentes/AppContent";



export default function App() {
  const [isAuth, setIsAuth] = useState(false);
    

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth === "true") setIsAuth(true);
  }, []);

  

  if (!isAuth) {
    return <Login onLogin={() => setIsAuth(true)} />;
  }



  return <AppContent onLogout={() => setIsAuth(false)} />;
 

}
