import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../shared/note.model';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input() note: Note
  
  constructor() { }

  ngOnInit(): void {
  }

}
