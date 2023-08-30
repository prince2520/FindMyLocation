import Lottie from "lottie-react";
import React, {useState} from "react";

import LogoAnimation from './animation/LottieFiles/Logo.json';

import {getIpAddressInfo} from "~api/api";

import Button from "~components/Button";
import Loading from "~components/Loading";
import CloseBtn from "~components/CloseBtn";

import type {myInfoType} from "~types/types";

import "./style.css";


function IndexPopup() {
    const [myIPInfo, setMyIPInfo] = useState<myInfoType>(null);
    const [showLoading, setShowLoading] = useState<boolean>(false);

    // getLocationHandler -> Used to get the complete detail of your IP Address.
    const getLocationHandler = () => {
        setMyIPInfo(null);
        setShowLoading(true);

        getIpAddressInfo().then(info=>{
            console.log("My IP Address Info: ", info);

            setMyIPInfo(info);
            setShowLoading(false);
        }).catch(()=>{
            setShowLoading(false);
        });
    };

    return (
        <div
            className={"flex flex-col w-[350px] bg-teal-10 rounded-xl px-[0.5rem] py-[0.75rem]"}>
            <header className={"flex justify-between items-center w-full]"}>
                <Lottie className={'w-[6rem]'} animationData={LogoAnimation}/>
                <CloseBtn/>
            </header>
            <main className={"flex justify-center items-center text-base font-bold mb-2 h-[4rem]"}>
                {(myIPInfo) ?
                    `Your Country is ${myIPInfo.country} and city is ${myIPInfo.city}.` :
                    !showLoading && `Press button to show your location.`}
                {showLoading && <div className={'w-[10rem]'}><Loading/></div>}
            </main>
            <footer className={"flex flex-col items-center justify-center"}>
                <Button disabled={showLoading} getLocationHandler={getLocationHandler} title={'Show my location'}/>
                <span className={'text-slate-400 mt-1.5 font-semibold'}>Created by @Prince</span>
            </footer>
        </div>
    )
}

export default IndexPopup;
