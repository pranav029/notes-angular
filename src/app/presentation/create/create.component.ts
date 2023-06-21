import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/data/Note';
import { NoteService } from 'src/app/data/NoteService';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  note: Note = {
    title: '',
    description: ''
  }
  
  @Output() showFab = new EventEmitter();

  constructor(
    private noteService: NoteService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.addNote()
  }

  addNote() {
    this.noteService.addNote(this.note).subscribe(() => {
      this.showFab.emit(true);
    })

  }

  close(){
    this.showFab.emit(true);
  }
}
