import {IFormNotice} from "./FormInterfaces";
import { useFormContext } from "react-hook-form";

export default function FormNotice(formNotice: IFormNotice) {
    const {formState: {isSubmitSuccessful}} = useFormContext();
    
    return (
        <>
        {isSubmitSuccessful &&
            <span className={`app-validation-message app-validation-message__${formNotice.type}`}>
                {formNotice.message}
            </span>
        }
        </>
    )
}
