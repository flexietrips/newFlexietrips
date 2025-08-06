"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children, size = "default" }) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Size variants
  const sizeClasses = {
    small: "max-w-md",
    default: "max-w-4xl",
    large: "max-w-6xl",
    full: "max-w-[95vw]"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className={`relative bg-white rounded-xl shadow-xl ${sizeClasses[size]} w-full max-h-[90vh] overflow-hidden transition-all duration-300 transform`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-gray-500" />
        </button>
        
        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;