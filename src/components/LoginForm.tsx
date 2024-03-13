import React, {useState} from 'react';
import axios from "axios";
import {useForm, FormProvider} from "react-hook-form"
import {ILoginFormValues} from "./form/FormInterfaces";
import {IFormNotice} from "./form/FormInterfaces";
import FormNotice from './form/FormNotice';
import PasswordInput from './form/PasswordInput';
import Button from './form/Button';
import EmailInput from "./form/EmailInput";

export function LoginForm() {
    const [formNotice, setFormNotice] = useState<IFormNotice>({});
    const methods = useForm<ILoginFormValues>({
        mode: 'onChange',
    });

    const onSubmit = async (data: ILoginFormValues) => {
        await axios.post(
            'v1/auth/login',
            data,
            {
                baseURL: 'https://auth-qa.qencode.com/'
            }
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
                Log in to your account
            </h2>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>

                    <div className="app-buttons-wrapper">
                        <button type="button"
                                className="app-button app-button__with-ico app-button__with-ico__google"
                        >
                            Google
                        </button>
                        <button type="button"
                                className="app-button app-button__with-ico app-button__with-ico__git"
                        >
                            Github
                        </button>
                    </div>

                    <div className="app-divider">
                        OR
                    </div>

                    <FormNotice {...formNotice}/>

                    <EmailInput />

                    <PasswordInput showForgotPasswordLink={true} inputName={'password'}/>

                    <Button buttonType={"submit"} isDisabled={methods.formState.isSubmitting} className="app-button app-button__primary"
                            title="Log in to Qencode"/>

                    <div>
                        Is your company new to Qencode?&nbsp;

                        <a className="app-link" href="/">
                            Sign up
                        </a>
                    </div>
                </form>
            </FormProvider>
        </section>
    )
}
