"use client";
import { Input } from "@heroui/react";
import React from "react";

type Props = {
  defaultValue?: string;
  className?: string;
  border?: string;
  placeholder?: string;
  isReadOnly?: boolean;
  endContent?: React.ReactNode;
  variant?: "flat" | "bordered" | "faded" | "underlined" | undefined;
  labelPlacement?:
    | "inside"
    | "outside"
    | "outside-left"
    | "outside-top"
    | undefined;
};

function EmailInputComponent({
  defaultValue,
  className,
  endContent,
  isReadOnly,
  placeholder,
  border,
  variant = "underlined",
  labelPlacement = "inside",
}: Props) {
  return (
    <div className="relative w-full">
      <Input
        label="E-mail"
        isRequired
        isReadOnly={isReadOnly}
        defaultValue={defaultValue}
        // startContent={<RiMailLine className="text-divider-500 w-4 h-4" />}
        labelPlacement={labelPlacement}
        placeholder={placeholder}
        variant={variant}
        name="email"
        type="email"
        size="sm"
        className={className}
        classNames={{
          label: ["m-0 pb-1 text-xs"],
          inputWrapper: [
            `rounded-0 h-[2.3rem] ${isReadOnly && "bg-divider"}`,
            `${border}`,
          ],
          input: ["placeholder:text-xs", "text-xs"],
        }}
      />

      <div className="absolute top-0 right-0 z-30 flex items-center justify-center h-8 w-8">
        <div className="p-1 pb-0 cursor-pointer flex items-center justify-center">
          {endContent}
        </div>
      </div>
    </div>
  );
}

export default EmailInputComponent;
