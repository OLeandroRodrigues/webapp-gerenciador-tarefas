
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: 'tarefa', redirectTo: 'tarefa/index', pathMatch: 'full'},
  { path: 'tarefa/index', component: IndexComponent },
  { path: 'tarefa/:tarefaId/view', component: ViewComponent },
  { path: 'tarefa/create', component: CreateComponent },
  { path: 'tarefa/:tarefaId/edit', component: EditComponent } 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefaRoutingModule { }