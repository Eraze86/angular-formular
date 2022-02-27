import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addanimal',
  templateUrl: './addanimal.component.html',
  styleUrls: ['./addanimal.component.scss']
})
export class AddanimalComponent implements OnInit {
  animalsForm = this.fb.group({
    name:['', Validators.required],
    type:['', Validators.required],
    description:[''],
    nickName: this.fb.array ([this.fb.control('')]),
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
// changeName(){
// this.name.setValue("Therese")
// }
get nicknames(){
  return this.animalsForm.get("nickName") as FormArray
}

onSubmit(){
  console.log(this.animalsForm.value)
}
addNick(){
  this.nicknames.push(this.fb.control(""))
  
}
}
