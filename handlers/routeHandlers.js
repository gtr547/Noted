import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";


export async function handleGet(res){
    
    const data = await getData();
    const stringedData = JSON.stringify(data);
    sendResponse(res, 200, "application/json", stringedData);

}

