import React, {useCallback, useState} from "react";
import {useFormContext} from "react-hook-form";
import {IPasswordInput} from "./FormInterfaces";

export default function PasswordInput({showLabel = false, labelText = '', showForgotPasswordLink = false, inputName}:IPasswordInput) {
    const [show, setShow] = useState(false);
    const {register, formState: {errors}} = useFormContext();
    const toggleShowPassword = useCallback(() => {
        setShow(!show);
    }, [show]);

    return (
        <div className={
            showLabel ? 'app-input-wrapper app-input-wrapper__password app-input-wrapper__with-label' : 'app-input-wrapper app-input-wrapper__password '
        }>
            {showLabel &&
                <label className="app-input-label" htmlFor={inputName}>{labelText}</label>
            }

            <input type={show ? 'text' : 'password'} className="app-input app-input__password"
                   placeholder="Password" id={inputName} {...register(inputName, {minLength: 8, required: true})}/>
            {errors[inputName] && <span className="app-validation-message">This field must be minimum 8 characters long</span>}

            <button type={'button'} title={show ? 'Hide Password' : 'Show Password'} className={show ? 'app-input-wrapper__password-toggle unhashed' : 'app-input-wrapper__password-toggle'} onClick={toggleShowPassword} />

            {showForgotPasswordLink &&
                <a className="app-link" href="/forgot-password">
                    Forgot your password?
                </a>
            }
        </div>
    )
}
