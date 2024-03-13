/* Interfaces which is used for forms and elements inside. */

export interface ILoginFormValues {
    email: string,
    password: string
}

export interface IForgotPasswordFormValues {
    email: string
}

export interface IResetPasswordFormValues {
    password: string,
    confirmpassword: string
}

export interface IPasswordInput {
    showLabel?: boolean,
    labelText?: string,
    showForgotPasswordLink?: boolean,
    inputName: string
}

export interface IButton {
    title: string,
    className: string,
    buttonType: 'submit' | 'button',
    isDisabled?: boolean
}

export interface IFormNotice {
    active?: boolean,
    type?: string,
    message?: string
}
