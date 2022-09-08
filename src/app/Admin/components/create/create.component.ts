import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  createParcelForm: FormGroup;
  ngOnInit(): void {
    this.createParcelForm = this.fb.group({
      sender: ['', [Validators.required]],
      receiver: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      pick_date: ['', [Validators.required]],
      deliver_date: ['', [Validators.required]],
      tracking_no: ['', [Validators.required]],
    });
  }

  createParcel(){}
}
