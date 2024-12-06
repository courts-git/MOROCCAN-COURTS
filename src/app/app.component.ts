import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from './background/background.component'; 
import { TeamsComponent } from "./teams/teams.component";
import { FooterComponent } from './footer/footer.component';
import { FeaturetteComponent } from './featurette/featurette.component';


@Component({
  selector: 'app-root',
  imports: [BackgroundComponent, TeamsComponent, FooterComponent, FeaturetteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MC';
}
