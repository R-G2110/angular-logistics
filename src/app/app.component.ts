import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { TopHeaderComponent } from '../components/top-header/top-header.component';
import { HeaderComponent } from '../components/header/header.component';
import { JumbotronComponent } from '../components/jumbotron/jumbotron.component';
import { MainComponent } from '../components/main/main.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopHeaderComponent, HeaderComponent, JumbotronComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-logistics';
}
