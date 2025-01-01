import { useEffect } from "react";

const useLoadExternalScript = (src) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src + "?" + Math.random().toString(36).substring(7);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script on component unmount
    };
  }, [src]);
};

export default useLoadExternalScript;
