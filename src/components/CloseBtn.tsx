import {Icon} from "@iconify/react";

const CloseBtn = () => {
    return (
        <div className={"flex gap-x-2 text-slate-800"}>
            <Icon className={'cursor-pointer'}
                  onClick={()=>window.close()}
                  icon="carbon:close-outline"
                  fontSize={'2rem'} />
        </div>
    );
}

export default CloseBtn;