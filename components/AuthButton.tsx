import React from "react";

interface AuthButtonProps {
  type: "login" | "register" | "reset-pwd" | "forgot-pwd";
  loading?: boolean;
}

const AuthButton: React.FC<AuthButtonProps> = ({ type, loading }) => {
  const labelMap: Record<AuthButtonProps["type"], string> = {
    login: "Log In",
    register: "Create Account",
    "reset-pwd": "Reset Password",
    "forgot-pwd": "Send Reset Link",
    
  };

  const label = labelMap[type];

  return (
    <>
      <button
        className={`pri-btn w-full py-2 rounded-md transition-all ${
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

export default AuthButton;
