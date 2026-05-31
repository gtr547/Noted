import fs from "node:fs/promises";
import path from "node:path";
import { getData } from "./getData.js";



export async function addNewNote(newNote){

    try {
        const note = await getData();
        note.push(newNote);
        const dataPath = path.join("Data", "data.json");
        await fs.writeFile(
            dataPath,
            JSON.stringify(note, null, 2),
            "utf-8"
        );
    } catch (error) {
        throw new Error(error);
    }

}