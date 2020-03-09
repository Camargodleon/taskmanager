import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component'

@NgModule({
  declarations: [ListarTarefasComponent, CadastrarTarefaComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [TarefaService]
})
export class TarefasModule { }
