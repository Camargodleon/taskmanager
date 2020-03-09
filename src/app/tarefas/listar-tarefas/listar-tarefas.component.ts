import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from '../shared/tarefa.model';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  remover($event:any, tarefa: Tarefa): void {
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa '+ tarefa.nome + '?')){
      this.tarefaService.remove(tarefa);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }


}
