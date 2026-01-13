import React from 'react';

interface ContinueButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'success';
  children?: React.ReactNode;
}

export const ContinueButton: React.FC<ContinueButtonProps> = ({
  onClick,
  disabled = false,
  variant = 'primary',
  children = 'Continue'
}) => {
  const baseClasses = "w-full py-4 rounded-xl font-semibold text-base transition-all duration-200";
  
  const variantClasses = {
    primary: disabled 
      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
      : "bg-[#7C3AED] text-white hover:bg-[#5B21B6] active:scale-[0.98]",
    success: disabled
      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
      : "bg-[#10B981] text-white hover:bg-[#059669] active:scale-[0.98]"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
};

export default ContinueButton;
