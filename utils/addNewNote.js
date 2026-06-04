import fs from "node:fs/promises";
import path from "node:path";
import { getData } from "./getData.js";
import { v4 } from "uuid";



export async function addNewNote(newNote){

    try {
        const uuid = v4();
        const updatedNote = {...newNote, uuid: uuid};
        const note = await getData();
        note.push(updatedNote);
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