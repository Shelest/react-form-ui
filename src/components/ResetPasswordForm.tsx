import React, {useState} from "react";
import {useForm, FormProvider} from "react-hook-form"
import {IFormNotice, IResetPasswordFormValues} from "./form/FormInterfaces";
import PasswordInput from "./form/PasswordInput";
import Button from "./form/Button";
import FormNotice from "./form/FormNotice";

export function ResetPasswordForm() {
    const [formNotice, setFormNotice] = useState<IFormNotice>({});
    const methods = useForm<IResetPasswordFormValues>({
        mode: 'onChange',
    });

    const onSubmit = async (data: IResetPasswordFormValues) => {
        return await (
            (methods.getValues('password') === methods.getValues('confirmpassword')) ?
                (setFormNotice({
                    ...formNotice,
                    message: 'Password will be changed after submit',
                    type: 'success'
                })) :
                (setFormNotice({
                    ...formNotice,
                    message: 'Confirm password should be the same like the password',
                    type: 'error'
                }))
        )
    };

    return (
        <section className="app-form-wrapper">
            <h2 className="app-title">
                Create New Password?
            </h2>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <FormNotice {...formNotice}/>

                    <PasswordInput labelText={'Password'} showLabel={true} inputName="password"/>

                    <PasswordInput labelText={'Confirm Password'} showLabel={true} inputName="confirmpassword"/>

                    <Button buttonType={"submit"} isDisabled={methods.formState.isSubmitting}
                            className="app-button app-button__primary"
                            title="Set New Password"/>
                </form>
            </FormProvider>
        </section>
    )
}
