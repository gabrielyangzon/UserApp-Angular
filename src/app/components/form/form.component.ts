import { Component, OnInit , EventEmitter , Output, Input  } from '@angular/core';

import { FormControl , FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  @Output() onAddUserClick = new EventEmitter()

  @Input() data : any 

  formGroup = new FormGroup({})
  

  constructor() { }

  ngOnInit(): void {
    // this.formGroup = new FormGroup()
    
    let formControls = {}

    for(let property in this.data){
      console.log(property)

      formControls

      Object.assign(formControls , {} )
      property : new FormControl()

    }

  }

  onAddUserClickHandler () {
    this.onAddUserClick.emit()
  }

}
