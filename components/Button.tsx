import React from "react";

interface ButtonProps {
  type: "login" | "register" | "get-started" | "get-the-app";
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type, loading }) => {
  const labelMap: Record<ButtonProps["type"], string> = {
    login: "Log In",
    register: "Create Account",
    "get-started": "Get Started",
    "get-the-app": "Get the App",
  };

  const styleMap: Record<ButtonProps["type"], string> = {
    login: "bg-blue-400 text-white hover:bg-blue-600",
    register: "text-blue-400 border-1 border-solid border-blue-400 hover:bg-blue-300 hover:text-white hover:border-blue-300",
    "get-started": "bg-blue-400 text-white hover:bg-blue-600",
    "get-the-app": "bg-gray-800 text-white hover:bg-gray-900",
  };

  const baseStyles = "text-lg w-full py-2 rounded-md transition-all";

  const label = labelMap[type];

  return (
    <>
      <button 
        className={`
          ${baseStyles} 
          ${styleMap[type]} 
          ${loading ? "opacity-70 cursor-not-allowed" : ""}
        `}
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Loading...
          </span>
        ) : (
          label
        )}
      </button>
    </>
  );
};

export default Button;