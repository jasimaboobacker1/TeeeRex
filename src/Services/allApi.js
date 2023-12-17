import { BASEURL } from "./baseUrl";
import { commonAPI } from "./commonApi";




export const getProducts = async()=>{
   return await commonAPI("GET",`${BASEURL}/Products`,"","")
}



