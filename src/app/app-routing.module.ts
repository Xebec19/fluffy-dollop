import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ResolverService } from './resolver.service';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
  },
  {
    path: 'second',
    component: SecondComponent,
    resolve: { msg: ResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
