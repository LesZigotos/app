
interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    label: string;
    disabled?: boolean;
}

function Button(props: ButtonProps) {

    return (
        <button onClick={props.onClick} disabled={props.disabled} className="bg-primary rounded-3xl py-3 px-10 w-min max-md:py-2 max-md:px-8">
            <p className="text-nowrap text-white text-xl max-md:text-base font-medium">
                {props.label}
            </p>
        </button>
    )
}

export default Button
