import path from "node:path";
 
 export function serveStatic(baseDir){
    const filePath = path.join(baseDir, "Public", "index.html");
    console.log(filePath);
 }