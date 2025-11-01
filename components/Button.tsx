import React from "react";

interface ButtonProps {
    type:  "login" | "register";
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type, loading }) => {
  const labelMap: Record<ButtonProps["type"], string> = {
    login: "Log In",
    register: "Create Account"
  };

    const label = labelMap[type];

      return (
    <>
      <button
        className={`bg-blue-400 text-lg text-white w-full py-2 rounded-md transition-all ${
          loading ? "opacity-70 cursor-not-allowed" : ""
        }`}
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