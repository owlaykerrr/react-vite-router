import { Form } from "@/components/Form/Form";
import clsx from "clsx";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { FormProps } from "react-router";
import styles from './LoginForm.module.scss'
import { Title } from "@/components/Common/Typography/Typography";
import { Field } from "@/components/Form/Field/Field";
import { InputEmail, InputPassword } from "@/components/Form/Input/Input";
import { Button } from "@/components/Common/Action/Action";

export type LoginFormProps = {
    className?: string;
    formSettings?: Omit<FormProps, 'children'>;
}

export function LoginForm({className, formSettings}: LoginFormProps) {
    return <Form {...formSettings} method="post" className={clsx(styles.container, className)} data-testid='LoginForm'>
        <Title>Авторизация</Title>
        <Field>
            <InputEmail name="email" placeholder="email@example.com"/>
        </Field>
        <Field>
            <InputPassword name="password" placeholder="Пароль"/>
        </Field>

        <Button type="submit" name="signin">Войти</Button>

    </Form>


}