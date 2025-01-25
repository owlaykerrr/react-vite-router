import clsx from "clsx";
import { FormHTMLAttributes, FunctionComponent } from "react";
import styles from './Form.module.scss';

export type FormTag = "form"  | FunctionComponent;

export type FormProps = {
    className?: string;
    Tag?: FormTag;
    children: React.ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

