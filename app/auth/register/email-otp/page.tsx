"use client";

import React, { useRef, useState, FormEvent } from "react";
import AuthButton from "@/components/AuthButton";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";

const maxPinLength = 4;

export default function EmailOtpVerification() {
  const [password, setPassword] = useState<string[]>(
    Array(maxPinLength).fill("")
  );
  const inpRefs = useRef<Array<HTMLInputElement | null>>([]);

  const [activeInput, setActiveInput] = useState(0);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    i: number
  ) => {
    if (e.key === "Backspace") {
      e.preventDefault(); // Prevent default backspace behavior

      // Create a new copy of the password array
      const newPass = [...password];
      newPass[i] = "";
      setPassword(newPass);

      // Move focus to the previous input, if not on the first one
      if (i > 0) {
        inpRefs.current[i - 1]?.focus();
        setActiveInput(i - 1);
      }
    }
  };

  /**
   * Handles change events when a user types in an input.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const value = e.target.value;

    // Use a regex to get only the first digit entered
    const digit = value.match(/[0-9]/);

    if (digit) {
      // Create a new copy of the password array
      const newPass = [...password];
      newPass[i] = digit[0]; // Set the digit
      setPassword(newPass);

      // Move focus to the next input if not on the last one
      if (i < maxPinLength - 1) {
        inpRefs.current[i + 1]?.focus();
        setActiveInput(i + 1);
      } else {
        // If on the last input, blur it and remove active state
        inpRefs.current[i]?.blur();
        setActiveInput(-1); // No input active
      }
    } else if (value === "") {
      // This handles cases like using the 'Delete' key
      const newPass = [...password];
      newPass[i] = "";
      setPassword(newPass);
    }
  };

  /**
   * Handles pasting a code into the inputs.
   */
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .trim()
      .slice(0, maxPinLength) // Get only maxPinLength chars
      .match(/\d/g); // Get only digits

    if (pastedData) {
      // Create a new, filled array
      const newPass = Array(maxPinLength).fill("");
      pastedData.forEach((digit, idx) => {
        newPass[idx] = digit;
      });
      setPassword(newPass);

      // Focus the last pasted input
      const lastPastedIndex = Math.min(pastedData.length, maxPinLength - 1);
      inpRefs.current[lastPastedIndex]?.focus();
      setActiveInput(lastPastedIndex);
    }
  };

  /**
   * Handles the form submission.
   */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const pin = password.join("");

    // Add your verification logic here
    if (pin.length === maxPinLength) {
      // Using a simple alert for demonstration.
      // In a real app, you'd show a modal or toast.
      const modal = document.getElementById("message-modal");
      const modalText = document.getElementById("modal-text");
      if (modal && modalText) {
        modalText.innerText = `Verifying PIN: ${pin}`;
        modal.classList.remove("hidden");
      }
    } else {
      const modal = document.getElementById("message-modal");
      const modalText = document.getElementById("modal-text");
      if (modal && modalText) {
        modalText.innerText = `Please enter all ${maxPinLength} digits.`;
        modal.classList.remove("hidden");
      }
    }
  };

  return (
    <>
      <div className="pb-3">
        <Link href="/auth/register/bio-data">
          <div className="px-5 flex items-center gap-2 text-blue-400 text-lg font-medium">
            <FaAngleLeft /> Back
          </div>
        </Link>
      </div>
      <h2 className="lg:text-5xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        Enter Verification Code
      </h2>
      <p className="text-center text-lg pb-5">
        We've sent a verification code to{" "}
        <span className="font-bold">/user-email</span>/
      </p>
      <div className="px-20">
        <form onSubmit={handleSubmit}>
          {/* This container handles the paste event for all inputs */}
          <div
            className="flex pb-10 pt-10 space-x-10 md:space-x-4 justify-center"
            onPaste={handlePaste}
          >
            {password.map((digit, i) => (
              <div
                key={i}
                className="w-12 h-12 md:w-14 md:h-14 relative rounded-lg overflow-hidden shadow-sm"
              >
                <label
                  htmlFor={`pin_${i}`}
                  className={`absolute flex justify-center items-center text-2xl top-0 left-0 w-full h-full rounded-lg
                     transition-all duration-200 ease-in-out
                     ${
                       activeInput === i
                         ? "border-2 border-blue-500 bg-blue-50"
                         : "bg-gray-200"
                     }
                     ${digit ? "text-gray-800" : "text-gray-400"}
                    `}
                >
                  {/* Show a filled circle if there's a digit, otherwise a placeholder */}
                  {digit !== "" ? "●" : "❌"}
                </label>
                <input
                  // Assign the ref element to our ref array
                  ref={(el) => (inpRefs.current[i] = el)}
                  onFocus={() => setActiveInput(i)}
                  onBlur={() => setActiveInput(-1)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  onChange={(e) => handleChange(e, i)}
                  className="absolute  top-0 left-0 w-full h-full text-center text-2xl font-semibold 
                             text-transparent bg-transparent border-none outline-none 
                             caret-blue-500" // Show caret color
                  id={`pin_${i}`}
                  // Use "tel" for a better mobile keyboard experience
                  type="tel"
                  maxLength={1} // Ensure only one character
                  value={digit}
                  aria-label={`PIN Digit ${i + 1}`}
                />
              </div>
            ))}
          </div>

          <AuthButton type="Verify" loading={false} />
        </form>
      </div>
    </>
  );
}
