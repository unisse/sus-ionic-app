import { Component, OnInit } from '@angular/core';
import {PerguntaService} from '../../services/pergunta.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PerguntaBuilder} from '../../domain/pergunta';

@Component({
  selector: 'app-nova-pergunta',
  templateUrl: './nova-pergunta.page.html',
  styleUrls: ['./nova-pergunta.page.scss'],
})
export class NovaPerguntaPage implements OnInit {

  form: FormGroup;

  constructor(private perguntaService: PerguntaService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      corpo: ['', Validators.required]
    });
  }

  cadastrar(): void {
    if (this.form.valid) {
      const pergunta = PerguntaBuilder.create(this.form.value);
      this.perguntaService.create(pergunta).then();
    }
  }

}
