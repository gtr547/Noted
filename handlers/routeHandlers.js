import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { addNewNote } from "../utils/addNewNote.js";
import { sanitizeInput } from "../utils/sanitizeInput.js";


export async function handleGet(res){
    
    const data = await getData();
    const stringedData = JSON.stringify(data);
    sendResponse(res, 200, "application/json", stringedData);

}


export async function handlePost(req, res) {

    try {
        const parsedBody = await parseJSONBody(req);
        const sanitizeBody = sanitizeInput(parsedBody)
        await addNewNote(sanitizeBody);
        sendResponse(res, 201, "application/json", JSON.stringify(sanitizeBody));
    } catch (error) {
        sendResponse(res, 400, "application/json", JSON.stringify({error: error}));
    }
  
}
