import { Component, OnInit } from '@angular/core';
import { NoteModel } from "../../models/noteModel";
import notesData from "../../data/MOCK_DATA.json";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{
  notes: NoteModel[] | undefined ;
  ngOnInit():void {
    // TODO Fetch Data
    this.notes=notesData;
  }
}
