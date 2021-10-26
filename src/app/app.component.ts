import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  lengthMeter: number;
  miles: number;

  onNameChange(value: any) {
    this.name = value.target.value;
  }
  onDateChange(value: any) {
    this.date = value.target.value;
  }
  onAmountChange(value: any) {
    this.amount = value.target.value;
  }
  onHeightChange(value: any) {
    this.height = value.target.value;
  }
  onLengthChange(value: any) {
    this.lengthMeter = value.target.value * 100;
  }
  onMilesChange(value: any) {
    this.miles = value.target.value;
  }
}
