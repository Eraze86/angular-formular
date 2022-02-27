import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
// changeName(){
// this.name.setValue("Therese")
// }

onSubmit(){
  console.log(this.animalsForm.value)
}
}
