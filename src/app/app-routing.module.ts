import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SoundListComponent} from "./sounds/sound-list/sound-list.component";

const routes: Routes = [
  {path: '', component: SoundListComponent},
  {path: 'feed', component: SoundListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
