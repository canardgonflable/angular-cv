import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BadgesComponent } from "./badges/badges.component";
import { XpComponent } from "./xp/xp.component";
import { ResumeComponent } from "./resume/resume.component";
import { MainpageComponent } from "./mainpage/mainpage.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "navbar", component: NavBarComponent },
  { path: "info", component: SidebarComponent },
  { path: "badges", component: BadgesComponent },
  { path: "xp", component: XpComponent },
  { path: "resume", component: ResumeComponent },
  { path: "mainpage", component: MainpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
