import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/app/data/Note';
import { NoteService } from 'src/app/data/NoteService';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {
  @Input() note: Note = {
    title: '',
    description: ''
  }

  @Output() refreshEvent = new EventEmitter();

  constructor(
    private noteService: NoteService
  ) { }

  delete() {
    if (this.note.id)
      this.noteService.deleteNote(this.note.id).subscribe(() => {
        console.log("deleted successfully")
        this.refreshEvent.emit(true)
      })
  }
}
