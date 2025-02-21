"use client";

import { FC } from "react";
import { ImSpinner } from "react-icons/im";

interface Props {
  isLoading: boolean;
  content: string;
  customClasses?: string;
  type?: "submit" | "button";
  onClick?: any;
  id?: string;
  disabled?: boolean;
}

const BtnWithLoading: FC<Props> = ({
  isLoading,
  content,
  customClasses,
  type,
  onClick,
  id,
  disabled,
}) => {
  return (
    <button
      className={`admin-primary-btn ${customClasses} ${
        disabled && "cursor-not-allowed"
      }`}
      type={type}
      onClick={onClick && onClick}
      id={id}
      disabled={disabled}
    >
      <span className="flex items-center justify-center gap-x-1">
        {isLoading ? (
          <>
            <ImSpinner className="animate-spin" size={18} /> Đang xử lý
          </>
        ) : (
          content
        )}
      </span>
    </button>
  );
};

export default BtnWithLoading;
