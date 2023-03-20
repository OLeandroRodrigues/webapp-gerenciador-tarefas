import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';
import { Tarefa } from '../tarefa';
      
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
      
  tarefas: Tarefa[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public tarefaService: TarefaService) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.tarefaService.getAll().subscribe((data: Tarefa[])=>{
      this.tarefas = data;
      console.log(this.tarefas);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteTarefa(id:number){
    this.tarefaService.delete(id).subscribe(res => {
        this.tarefas = this.tarefas.filter(item => item.tarefaId !== id);
        console.log('Tarefa deleted successfully!');
    })
  }
    
}