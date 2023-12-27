"use client";
import React from "react";
import {
  UseFormRegister,
  FieldValues,
  DeepMap,
  FieldError,
} from "react-hook-form";
import styles from "./Input.module.css";
import { useAppSelector } from "@/lib/hooks";

interface InputProps {
  type: string;
  placeholder: string;
  label: string;
  name: string;
  required: boolean;
  pattern?: any;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  register: UseFormRegister<any>;
  errors: DeepMap<FieldValues, FieldError>;
}

function Input({
  type,
  placeholder,
  label,
  name,
  required,
  pattern,
  maxLength,
  minLength,
  max,
  min,
  register,
  errors,
}: InputProps) {
  const theme = useAppSelector((state) => state.theme.theme)
  return (
    <>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={theme === 'light'?styles.light_text_input:styles.dark_text_input}
        {...register(name, { required: required, pattern: pattern })}
      />
      {errors.name?.message && (
        <div style={{ color: "red" }}>{label} це обовязкове поле</div>
      )}
    </>
  );
}

export default Input;
