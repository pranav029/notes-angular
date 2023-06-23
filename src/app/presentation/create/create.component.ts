import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note } from 'src/app/data/Note';
import { NotesService } from 'src/app/data/NotesService';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { DIALOG_POSITIVE_RESPONSE, SAVE_CONFIRMATION_MESSAGE } from 'src/app/constants/Constants';

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
    private noteService: NotesService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void { }

  onSubmit() {
    this.confirmSubmit()
  }

  private confirmSubmit(){
    let message = SAVE_CONFIRMATION_MESSAGE.replace("%s", this.note.title);
    let ref = this.matDialog.open(ConfirmationDialogComponent, {
      data: message
    })
    ref.afterClosed().subscribe((result) => {
      if (result == DIALOG_POSITIVE_RESPONSE)
        this.addNote()
    });
  }

  private addNote() {
    this.noteService.addNote(this.note).subscribe(() => {
      this.showFab.emit(true);
    })

  }

  close() {
    this.showFab.emit(true);
  }
}
