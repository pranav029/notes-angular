import { Observable } from "rxjs";
import { Note } from "../models/Note";

export abstract class NotesService {
    abstract addNote(note: Note): Observable<any>;
    abstract deleteNote(id: number): Observable<any>;
    abstract getAllNotes(): Observable<Note[]>;
}