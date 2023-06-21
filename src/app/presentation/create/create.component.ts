import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Note } from 'src/app/data/Note';
import { NoteService } from 'src/app/data/NoteService';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { DIALOG_POSITIVE_RESPONSE, SAVE_CONFIRMATION_MESSAGE } from 'src/app/Constants';

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
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let message = SAVE_CONFIRMATION_MESSAGE.replace("%s", this.note.title);
    let ref = this.matDialog.open(ConfirmationDialogComponent, {
      data: message
    })
    ref.afterClosed().subscribe((result) => {
      if (result == DIALOG_POSITIVE_RESPONSE)
        this.addNote()
    });
  }

  addNote() {
    this.noteService.addNote(this.note).subscribe(() => {
      this.showFab.emit(true);
    })

  }

  close() {
    this.showFab.emit(true);
  }
}
