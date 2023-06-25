import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/data/models/Note';
import { NotesService } from 'src/app/data/notes/NotesService';
import { NotesServiceImpl } from 'src/app/data/notes/NotesServiceImpl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  notes: Note[] = [];

  isAddNoteVisible: Boolean = true;

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.fetch()
  }

  private fetch() {
    this.noteService.getAllNotes().subscribe((notes) => {
      this.notes = notes;
    });
  }

  refresh(buttonState: Boolean) {
    this.isAddNoteVisible = true;
    this.fetch()
  }

  hideCreateNote(){
    this.isAddNoteVisible = false;
  }
}
