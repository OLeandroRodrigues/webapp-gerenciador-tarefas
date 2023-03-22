import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../tarefa';
import { FormGroup, FormControl, Validators} from '@angular/forms';
     
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
      
  id!: number;
  tarefa!: Tarefa;
  form!: FormGroup;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['tarefaId'];
    this.tarefaService.find(this.id).subscribe((data: Tarefa)=>{
      this.tarefa = data;
    }); 
      
    this.form = new FormGroup({
      tarefaId: new FormControl('', Validators.required),
      tarefaStatusId: new FormControl('', Validators.required),
      descricao: new FormControl('', [Validators.required]),
      data: new FormControl('', Validators.required),
    });
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.tarefaService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Tarefa updated successfully!');
         this.router.navigateByUrl('tarefa/index');
    })
  }
   
}