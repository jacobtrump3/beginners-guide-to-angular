import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentChildComp } from './components/contentChildExample/content-child-example';
import { ContentChildrenComp } from './components/contentChildrenExample/content-children-example';
import { FormExampleComponent } from './components/formExample/form-example';
import { Home } from './components/home/home.component';
import { SingleFileComponent } from './components/singleFile/single-file.component';
import { TwoWayDataBindingComponent } from './components/twoWayDataBindingExample/two-way-data-binding-example';

const routes: Routes = [
    {path: 'angular-examples', component: Home},
    {path: 'angular-examples/content-child', component: ContentChildComp},
    {path: 'angular-examples/content-children', component: ContentChildrenComp},
    {path: 'angular-examples/form', component: FormExampleComponent},
    {path: 'angular-examples/single-file', component: SingleFileComponent},
    {path: 'angular-examples/two-way-data-binding', component: TwoWayDataBindingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }