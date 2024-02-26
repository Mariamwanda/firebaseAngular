import { Routes } from '@angular/router';
import { SidebarComponent } from './composant/sidebar/sidebar.component';
import { TopbarComponent } from './composant/topbar/topbar.component';
import { SectionComponent } from './composant/section/section.component';

export const routes: Routes = [
    {path:'bar',component:SidebarComponent},
    {path:'top',component:TopbarComponent},
    {path:'section',component: SectionComponent}
];
