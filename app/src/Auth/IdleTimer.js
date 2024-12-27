import { useEffect, useRef, useCallback } from "react";

const IdleTimer = ({ logoutHandler }) => {
  const timeoutRef = useRef(null);

  const handleActivity = useCallback(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      logoutHandler();
    }, 30 * 60 * 1000);
  }, [logoutHandler]);

  useEffect(() => {
    document.addEventListener("mousemove", handleActivity);
    document.addEventListener("keydown", handleActivity);
    document.addEventListener("touchstart", handleActivity);

    return () => {
      document.removeEventListener("mousemove", handleActivity);
      document.removeEventListener("keydown", handleActivity);
      document.removeEventListener("touchstart", handleActivity);
    };
  }, [handleActivity]);

  return null;
};

export default IdleTimer;
