import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  phoneReg = /^\d+$/;

  ngOnInit(): void {
  
  }


  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.reactForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  reactForm  = this.fb.group({
    email: [null,[Validators.required,Validators.email]],
    password :  [null,[Validators.required,Validators.pattern(this.regularExpression)]],
    conPassword: [null,[Validators.required,this.confirmationValidator]],
    userName:[null,[Validators.required]],
    phoneNum:[null,[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(this.phoneReg)]],
    agree : [false,[Validators.requiredTrue]]
  });

  //  reactForm  = this.fb.group({
  //    email: [null,[Validators.required,Validators.email]],
  //    password :  [null,[Validators.required,Validators.pattern(this.regularExpression)]],
  //    conPassword: [null,[Validators.required,this.confirmationValidator]],
  //    userName:[null,[Validators.required]],
  //    phoneNum:[null,[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(this.phoneReg)]],
  //    agree : [false]
  //  });

   submitForm():void{
    for (const i in this.reactForm.controls) {
      if (this.reactForm.controls.hasOwnProperty(i)) {
        this.reactForm.controls[i].markAsDirty();
        this.reactForm.controls[i].updateValueAndValidity();
        console.log(this.reactForm.controls[i]);
      }
    }
     
   }

}
