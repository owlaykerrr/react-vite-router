import clsx from "clsx";
import { InputHTMLAttributes } from "react";
import styles from './Input.module.scss'

export type InputProps = {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;


