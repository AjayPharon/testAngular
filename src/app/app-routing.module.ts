import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ShowDataComponent } from './show-data/show-data.component';

 
const routes: Routes = [{ path:'',redirectTo:'searchField',pathMatch:'full' },
                        { path: 'searchField', component: SearchFieldComponent },
                        { path: 'showData', component: ShowDataComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
