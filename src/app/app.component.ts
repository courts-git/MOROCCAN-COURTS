import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from './background/background.component'; 
import { TeamsComponent } from "./teams/teams.component";


@Component({
  selector: 'app-root',
  imports: [BackgroundComponent, TeamsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FRMB';
}
