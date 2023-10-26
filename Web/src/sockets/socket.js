import { io } from "socket.io-client";

let cachedSocket = null;

export default function initializeSocket(userData) {
  if (cachedSocket) {
    return cachedSocket;
  }

  let query = {};
  if (userData?._id) {
    query.userId = userData._id;
  }

  const socket = io(import.meta.env.VITE_SOCKET_API_URL, {
    query,
    closeOnBeforeunload: false,
  });

  cachedSocket = socket;
  return socket;
}


export const removeCachedSocket = () => {
  cachedSocket = null;
}