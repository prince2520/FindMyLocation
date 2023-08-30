import type {ButtonProps} from "~types/types";

const Button :React.FC<ButtonProps> = ({title, getLocationHandler, disabled}) => {
    return (
        <button disabled={disabled} onClick={getLocationHandler} className={`${!disabled ? "bg-teal-600 hover:bg-teal-500" : "bg-slate-400" } self-center text-white font-semibold text-base w-fit rounded-lg py-[4px] px-[10px]`}>
            {title}
        </button>
    );
}

export default Button;