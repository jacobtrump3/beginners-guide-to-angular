import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @Input()
  currentRoute: string | undefined
  title = 'beginners-guide-to-angular';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate([this.currentRoute || `angular-examples`])
  }
}
