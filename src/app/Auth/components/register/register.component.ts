import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface UserType {
  name: string;
  type: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  employeeType: UserType[] = [];
  selectedEmployeeType: string = '';
  selectedDate!: Date;
  constructor(private router: Router, private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.employeeType = [
      { name: 'employee', type: 'employee' },
      { name: 'client', type: 'client' },
    ];
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      sex: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      age: ['', Validators.required],
      usertype: new FormControl('', [Validators.required]), // u'll need to take the value from the object
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  FormSubmition() {
    console.log('el form ya beh tal3a kda ', this.form.value);
  }
  selected() {
    console.log('ya 3am enta ', this.selectedEmployeeType);
    // console.log('from change method', e.target.vlaue);
  }
}
