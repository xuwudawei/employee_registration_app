import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },

  {
    path: 'landing',
    loadChildren: () =>
      import('./landing-page/landing-page.module').then(
        (m) => m.LandingPagePageModule
      ),
  },

  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then((m) => m.EmployeePageModule),
  },
  {
    path: 'add-employee-page',
    loadChildren: () =>
      import('./add-employee-page/add-employee-page.module').then(
        (m) => m.AddEmployeePagePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
