import React, {useState} from "react";
import axios from 'axios';
import {FormProvider, useForm} from "react-hook-form";
import {IForgotPasswordFormValues, IFormNotice} from "./form/FormInterfaces";
import EmailInput from "./form/EmailInput";
import Button from "./form/Button";
import FormNotice from "./form/FormNotice";

export function ForgotPasswordForm() {
    const [formNotice, setFormNotice] = useState<IFormNotice>({});
    const methods = useForm<IForgotPasswordFormValues>({
        mode: 'onChange',
    });
    const onSubmit = async (data: IForgotPasswordFormValues) => {
        await axios.post(
            'v1/auth/password-reset',
            {...data, redirect_url: '/reset-password'},
            {
                baseURL: "https://auth-qa.qencode.com/",
                headers: {
                    "Content-Type": "application/json",
                }
            },
        ).then(function (response) {
            //handle success
            setFormNotice({
                ...formNotice,
                message: 'You should be logged in successfuly.',
                type: 'success'
            });
            methods.reset();
        }).catch(function (response) {
            //handle error
            setFormNotice({
                ...formNotice,
                message: response.response.data.detail,
                type: 'error'
            });
        });
    };

    return (
        <section className="app-form-wrapper">
            <h2 className="app-title">
                Forgot Password?
            </h2>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <FormNotice {...formNotice}/>
                    <EmailInput/>
                    <Button buttonType={"submit"} isDisabled={methods.formState.isSubmitting} className="app-button app-button__primary" title="Send"/>
                    <a href="/" type="button" className="app-button app-button__secondary">
                        Cancel
                    </a>
                </form>
            </FormProvider>
        </section>
    )
}
