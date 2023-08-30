export interface myInfoType {
    country: string,
    city : string,
}

export interface ButtonProps {
    title: string,
    getLocationHandler : ()=>void,
    disabled: boolean,
}

