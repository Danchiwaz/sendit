import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-success',
  templateUrl: './error-success.component.html',
  styleUrls: ['./error-success.component.css'],
})
export class ErrorSuccessComponent implements OnInit {
  @Input() message!: string;
  @Output() end = new EventEmitter<void>();
  constructor() {}
  ngOnInit(): void {}
  close() {
    this.end.emit();
  }
}
