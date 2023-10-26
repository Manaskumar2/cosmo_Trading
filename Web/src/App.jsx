import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import AdminRoute from "./routes/AdminRoute";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { AuthState } from "./Atoms/AuthState";
import initializeSocket, { removeCachedSocket } from "./sockets/socket";

function App() {
  const authState = useRecoilValue(AuthState);
  
  useEffect(() => {
    const socket = initializeSocket(authState);
    return () => {
      socket.disconnect();
      removeCachedSocket();
    };
  }, [authState?._id]);

  return (
    <>
      <AdminRoute />
      <AppRoutes />
    </>
  );
}

export default App;
