import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-section',
  templateUrl: './countdown-section.component.html',
  styleUrls: ['./countdown-section.component.css'],
})
export class CountdownSectionComponent implements OnInit {
  days: string = '';
  hours: string = '';
  minutes: string = '';
  seconds: string = '';

  ngOnInit(): void {
    this.startCountdown('Jan 28, 2024 00:00:00');
  }

  startCountdown(endDate: string): void {
    let interval = setInterval(() => {
      let now = new Date().getTime();
      let distance = new Date(endDate).getTime() - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.days = days.toString();
      this.hours = hours.toString();
      this.minutes = minutes.toString();
      this.seconds = seconds.toString();

      if (distance < 0) {
        clearInterval(interval);
        this.days = '0';
        this.hours = '0';
        this.minutes = '0';
        this.seconds = '0';
      }
    }, 1000);
  }
}
