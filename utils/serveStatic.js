import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "./sendResponse.js";
import { getContentType } from "./getContentType.js";
 
 export async function serveStatic(req, res, baseDir){

    const publicDirPath = path.join(baseDir, "Public");

    const filePath = path.join(
        publicDirPath,
        req.url ==="/" ? "index.html" : req.url
    );

    const ext = path.extname(filePath);

    const contentType = getContentType(ext);
    
    try {
        const content = await fs.readFile(filePath);
        sendResponse(res, 200, contentType, content);
    } catch (error) {
        console.log(error);
    }

 }