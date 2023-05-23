import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EqubFront';

  constructor(private readonly _router: Router) {}
  createUser() {
    this._router.navigate(['/user/create']);
  }
}
