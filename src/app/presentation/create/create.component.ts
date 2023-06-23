import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note } from 'src/app/data/Note';
import { NotesService } from 'src/app/data/NotesService';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { DIALOG_POSITIVE_RESPONSE, NOTES_SNACKBAR_DURATION, SAVE_CONFIRMATION_MESSAGE, SAVE_SUCCESS } from 'src/app/constants/Constants';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay } from 'rxjs';

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

  isSaveInProgress = false
  @Output() showFab = new EventEmitter();

  constructor(
    private noteService: NotesService,
    private matDialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void { }

  onSubmit() {
    this.confirmSubmit()
  }

  private confirmSubmit() {
    let ref = this.matDialog.open(ConfirmationDialogComponent, {
      data: this.getConfirmationMessage()
    })
    ref.afterClosed().subscribe((result) => {
      if (this.isDialogResponsePositve(result))
        this.addNote()
    });
  }

  private addNote() {
    this.isSaveInProgress = true
    setTimeout(() => {
      this.noteService.addNote(this.note).subscribe(() => {
        this.isSaveInProgress = false;
        this.showSaveSuccess();
        this.showFab.emit(true);
      })
    }, 2000)
  }

  private getConfirmationMessage() {
    return SAVE_CONFIRMATION_MESSAGE.replace("%s", this.note.title);
  }

  private isDialogResponsePositve(result: string): Boolean {
    return result == DIALOG_POSITIVE_RESPONSE
  }

  private showSaveSuccess() {
    this.snackbar.open(SAVE_SUCCESS, "", {
      duration: NOTES_SNACKBAR_DURATION
    });
  }

  close() {
    this.showFab.emit(true);
  }

}
