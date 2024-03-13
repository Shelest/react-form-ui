import { IButton } from "./FormInterfaces";

export default function Button(props: IButton) {
    return (
        <button type={props.buttonType} disabled={props.isDisabled} className={props.className}>
            {props.title}
        </button>
    )
}
