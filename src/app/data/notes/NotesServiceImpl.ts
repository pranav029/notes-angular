import { HttpClient } from "@angular/common/http";
import { Note } from "../models/Note";
import { Injectable } from "@angular/core";
import { NotesService } from "./NotesService";
import { BASE_URL } from "../../constants/Constants";

export const headers = { 'Content-Type': 'application/json' };

@Injectable({
    providedIn: 'root'
})
export class NotesServiceImpl implements NotesService {
    constructor(private httpClient: HttpClient) { }
    addNote(note: Note) {
        //TODO add error handling
        return this.httpClient.post(BASE_URL, note, { headers })
    }
    deleteNote(id: number) {
        return this.httpClient.delete(`${BASE_URL}/${id}`, { headers })
    }
    getAllNotes() {
        return this.httpClient.get<Note[]>(BASE_URL);
    }
}