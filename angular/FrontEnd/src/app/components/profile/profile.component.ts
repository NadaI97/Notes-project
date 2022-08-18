import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _NoteService: NoteService ) { }

  ngOnInit(): void {

 
  }

  errorMes: string = "";
  responseDone : string= "";

  addNoteForm: FormGroup = new FormGroup({

    title: new FormControl(null, Validators.required) ,
    description:new FormControl(null, Validators.required)
  });

  //  token = localStorage.getItem('userToken');

addNote() {this._NoteService.addNewNote(this.addNoteForm.value).subscribe(

    
    (res)=>{
      console.log(this.addNoteForm.value);
      
      console.log(res);


      if (res.message == "Done") {
        this.responseDone= res.message
     
      }
    },
    (err)=>{this.errorMes = err.message}
  )
}
}
