import { HttpClient } from "@angular/common/http";
import { Note } from "./Note";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs";

const headers = { 'Content-Type': 'application/json' };
@Injectable({
    providedIn:'root'
})
export class NoteService{
    constructor(private httpClient:HttpClient){}
    addNote(note:Note){
        return this.httpClient.post("http://localhost:3000/notes",note,{headers})
    }
    deleteNote(id:number){
        return this.httpClient.delete(`http://localhost:3000/notes/${id}`,{headers})
    }
    getAllNotes(){
        return this.httpClient.get<Note[]>("http://localhost:3000/notes");
    }
}