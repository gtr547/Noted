import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { addNewNote } from "../utils/addNewNote.js";
import { sanitizeInput } from "../utils/sanitizeInput.js";
import { quotes } from "../Data/quotes.js";


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

export async function handleQuote(req, res){
    res.statusCode = 200;

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    setInterval(()=>{
        let randomIndex = Math.floor(Math.random() * quotes.length);

        res.write(
            `data: ${JSON.stringify(
                {
                    event: "quote-update",
                    quote: quotes[randomIndex]
                }
            )}\n\n`
        );


    },3000);

}


