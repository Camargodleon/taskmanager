import { Component, OnInit, ViewChild } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', {static: true}) formTarefa: NgForm
  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar(): void {
    if(this.formTarefa.form.valid){
      this.tarefaService.atualizarTarefa(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

}
