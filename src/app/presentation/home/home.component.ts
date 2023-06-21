import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/data/Note';
import { NoteService } from 'src/app/data/NoteService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  notes: Note[] = [];
  @Input() isAddNoteVisible:Boolean = false;
  @Output() toggleFab = new EventEmitter<Boolean>();
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.fetch()
  }

  fetch(){
    this.noteService.getAllNotes().subscribe((notes) => {
      this.notes = notes;
    });
  }

  refresh(state:Boolean){
    this.toggleFab.emit(state)
    this.fetch()
  }
}