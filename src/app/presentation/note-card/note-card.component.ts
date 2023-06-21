import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note } from 'src/app/data/Note';
import { NoteService } from 'src/app/data/NoteService';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { DELETE_CONFIRMATION_MESSAGE, DIALOG_POSITIVE_RESPONSE } from 'src/app/Constants';

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
    private noteService: NoteService,
    private matDialog: MatDialog
  ) { }

  private delete() {
    if (this.note.id)
      this.noteService.deleteNote(this.note.id).subscribe(() => {
        console.log("deleted successfully")
        this.refreshEvent.emit(true)
      })
  }
  confirmDelete() {
    let confirmationMessage: string = DELETE_CONFIRMATION_MESSAGE.replace("%s", this.note.title)
    let ref = this.matDialog.open(ConfirmationDialogComponent, {
      data: confirmationMessage
    });
    ref.afterClosed().subscribe((result) => {
      if (result == DIALOG_POSITIVE_RESPONSE)
        this.delete();
    });
  }
}
