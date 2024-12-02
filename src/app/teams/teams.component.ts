import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  imports: [],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  teams: string[] = [
    'AS FAR',
    'Wydad Athletic Club',
    'Ittihad Tanger',
    'Maghreb Fès',
    'FUS Rabat',
    'KAC Kénitra',
    'Raja de Casablanca',
    'Chabab Rif Al Hoceima',
    'Olympique Khouribga',
    'Tihad Athletic Sportif',
    'Mouloudia Oujda',
    'AS Salé',
    'Kawkab Marrakech',
    'Renaissance Berkane',
    'COD Meknès',
    'Raja Al Hoceima'
  ];
}
