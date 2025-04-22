
import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a minimum time to avoid flashing
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-yhwh-white z-[100] flex items-center justify-center transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative flex flex-col items-center">
        <img
          src="/lovable-uploads/e39ca635-cba2-47d7-b864-8ae2416e17c8.png"
          alt="YHWH Agency"
          className="h-36 w-auto mb-2"
          style={{ maxHeight: 144 }}
        />
        <div className="mt-4 h-1 w-48 bg-yhwh-brown-light/20 overflow-hidden rounded-full">
          <div
            className="h-full bg-yhwh-brown-dark origin-left"
            style={{
              animation: "loading 1.5s ease-in-out infinite",
            }}
          ></div>
        </div>
        <style>
          {`
            @keyframes loading {
              0% {
                width: 0%;
              }
              50% {
                width: 100%;
              }
              100% {
                width: 0%;
                transform: translateX(100%);
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Loader;
