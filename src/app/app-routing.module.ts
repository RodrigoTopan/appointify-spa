import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { CategoryComponent } from "./pages/category/category.component";
import { MenuComponent } from "./pages/menu/menu.component";
import { AuthGuard } from "./auth.guard";
import { OfferedServiceComponent } from "./pages/offered-service/offered-service.component";
import { ScheduleComponent } from "./pages/schedule/schedule.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: MenuComponent },
      { path: "categories/:id", component: CategoryComponent },
      { path: "companies/:id", component: OfferedServiceComponent },
      { path: "services/:id", component: ScheduleComponent }
    ]
  }
  // { path: '',   redirectTo: '/login', pathMatch: 'full' }
  // { path: 'second-component', component: SecondComponent },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
