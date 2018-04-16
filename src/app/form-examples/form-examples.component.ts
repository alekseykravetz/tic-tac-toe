import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';


interface ITestContent {
  selectedOption: string;
  comments: string;
}



@Component({
  selector: 'app-form-examples',
  templateUrl: './form-examples.component.html',
  styleUrls: ['./form-examples.component.css']
})
export class FormExamplesComponent implements OnInit {

  public profileGroup: FormGroup = new FormGroup({
    firstNameInput: new FormControl(''),
    lastNameInput: new FormControl(''),
    addressGroups: new FormArray([
      new FormGroup({
        streetInput: new FormControl(''),
        cityInput: new FormControl(''),
      }),
    ]),
  });

  public firstNameInput1: FormControl = new FormControl('');
  public lastNameInput1: FormControl = new FormControl('');

  public testContent: ITestContent = {
    selectedOption: '',
    comments: '',
  };

  public selectOptions = [
    ['A', 'Aaaaaaa'],
    ['B', 'Bbbbbbb'],
    ['C', 'Ccccccc'],
    ['D', 'Ddddddd'],
  ];

  constructor(
    private fb: FormBuilder) {

    this.profileGroup = fb.group({
      firstNameInput: [''],
      lastNameInput: [''],
      addressGroups: this.fb.array([
        this.fb.group({
          streetInput: [''],
          cityInput: [''],
        })]),
    });
  }

  ngOnInit() {
  }


  addAddress() {
    const fa = this.profileGroup.controls['addressGroups'] as FormArray;
    fa.push(this.fb.group({
      streetInput: [''],
      cityInput: [''],
    }));
  }

  saveProfileForm() {
    console.log(this.profileGroup.value);
  }

  submitForm() {
    console.log(this.testContent);
  }
  doSomethingElse() {
    console.log(this.testContent);
  }

  private newAddressGroup() {
    return new FormGroup({
      streetInput: new FormControl(''),
      cityInput: new FormControl(''),
    });
  }


}
