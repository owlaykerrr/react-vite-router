import { Form } from "@/components/Form/Form";
import clsx from "clsx";
import { FormProps } from "react-router";
import styles from './RegisterForm.module.scss'
import { Title } from "@/components/Common/Typography/Typography";
import { Field } from "@/components/Form/Field/Field";
import { InputEmail, InputPassword, InputText } from "@/components/Form/Input/Input";
import { Button } from "@/components/Common/Action/Action";

export type RegisterFormProps = {
    className?: string;
    formSettings?: Omit<FormProps, 'children'>
}


export function RegisterForm({className, formSettings}: RegisterFormProps) {
    return <Form {...formSettings} method="post" className={clsx(styles.container, className)} data-testid="LoginForm">
        <Title>Регистрация</Title>
        <Field>
            <InputText name="name" placeholder="Имя"/>
        </Field>
        <Field>
            <InputEmail name="email" placeholder="email@example.com"/>
        </Field>
        <Field>
            <InputPassword name="password" placeholder="Пароль"/>
        </Field>
        <Field>
            <InputPassword placeholder="Повторите пароль"/>
        </Field>
        <Button type="submit" name="signup">Зарегистрироваться</Button>
    </Form>;
}

