
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class CONTACTUSComponent {
  constructor(private fb:FormBuilder ){}
contactForm=this.fb.group({
  name :['',Validators.required],
  email:['',Validators.required],
  phone :['',Validators.required],
  message:['',Validators.required],

})
update(){
console.log(this.contactForm.value);

}

}
