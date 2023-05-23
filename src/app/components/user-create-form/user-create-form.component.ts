import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.css']
})
export class UserCreateFormComponent implements OnInit {

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName:  ['', Validators.required],
    userName: ['', Validators.required],
    phoneNumber:  ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    password:  ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.warn(this.userForm.value);
  }
}