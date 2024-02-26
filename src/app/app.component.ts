import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './composant/sidebar/sidebar.component';
import { TopbarComponent } from './composant/topbar/topbar.component';
import { SectionComponent } from './composant/section/section.component';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule,RouterOutlet,SidebarComponent,TopbarComponent,SectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularFb';
}
