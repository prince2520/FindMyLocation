// @ts-ignore
import IPinfoWrapper, {AsnResponse, IPinfo} from "node-ipinfo";
import * as process from "process";

const ipinfoWrapper = new IPinfoWrapper(process.env.PLASMO_PUBLIC_IPADDRESS);

export const getIpAddressInfo  = async () => {

    try{
        const ipInfo= await (await fetch(process.env.PLASMO_PUBLIC_IPINFO)).json();
        return await ipinfoWrapper.lookupIp(ipInfo.ip);
    }catch (err){
        console.log(err)
    }
    return null;
}



