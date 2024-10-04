import { ChangeEvent, ReactNode } from "react";
import styles from "./TextInput.module.css";

interface Props {
  label: string;
  placeholder?: string;
  children?: ReactNode;
  required?: boolean;
  hidden?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const TextInput = ({
  label,
  placeholder,
  children,
  required,
  hidden,
  value,
  onChange,
}: Props) => {
  return (
    <div className={styles["label-input"]}>
      <label className={styles.label} htmlFor={label}>
        {children}
      </label>
      <input
        className={styles.input}
        id={label}
        name={label}
        type="text"
        value={value}
        placeholder={placeholder}
        required={required}
        hidden={hidden}
        onChange={onChange}
      ></input>
    </div>
  );
};