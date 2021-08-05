import { Component, OnInit } from '@angular/core';
import { NoteModel } from "../../models/noteModel";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{
  notes:NoteModel[] | undefined;
  
  ngOnInit():void {
    // TODO Fetch Data
    this.notes=[
      {id:1,title:"Title 1",desc:"Desc 1"},
      {id:1,title:"Title 2",desc:"Desc 2"},
      {id:1,title:"Title 3",desc:"Desc 3"}
    ]
  }
}
