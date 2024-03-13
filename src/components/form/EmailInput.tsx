import { useFormContext } from "react-hook-form";

export default function EmailInput() {
    const { register, formState: {errors}}:any = useFormContext();

    return (
        <div className="app-input-wrapper">
            <input type="text" className="app-input" placeholder="Work email" {...register('email', {
                required: {
                    value: true,
                    message: 'This is required field'
                },
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter valid email address'
                },
            })}
            />
            {errors.email && (
                <span className="app-validation-message">{errors.email.message}</span>
            )}
        </div>
    )
}
