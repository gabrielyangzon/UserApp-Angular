import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

 public userData :UserModel = {} as UserModel

 emailFormControl = new FormControl('', [Validators.required, Validators.email]);

 constructor(public activatedRoute : ActivatedRoute) { }


  ngOnInit(): void {
 
     if(history.state['user'] !== undefined)
     {
        this.userData  = history.state['user']
     }
    

     console.log(this.userData)
  }

  ngOnDestroy(){
    this.userData  = {} as UserModel
  }


  getKeys = (obj :any) : boolean => Object.keys(obj).length !== 0


}
