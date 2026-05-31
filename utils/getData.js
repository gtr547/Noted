import path from "node:path";
import fs from "node:fs/promises";

export async function getData(){

    const dataPath = path.join("Data", "data.json");

    try {
        const data = await fs.readFile(dataPath, "utf8");
        const parsedData = await JSON.parse(data);
        return parsedData;
    } catch (error) {
        console.log(error);
        return[];
    }
}