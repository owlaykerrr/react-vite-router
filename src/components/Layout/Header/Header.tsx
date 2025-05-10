import { ReactNode } from "react";
import { Menu, MenuProps } from "../Menu/Menu";

import clsx from "clsx";
import styles from './Header.module.scss'
import { Logo } from "../Logo/Logo";

export type HeaderProps = {
	className?:string;
	children?: ReactNode
}


