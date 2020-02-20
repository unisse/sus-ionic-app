import { Injectable } from '@angular/core';
import {BaseFirestoreService} from '../../../shared/services/base-firestore.service';
import {Pergunta} from '../domain/pergunta';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService extends BaseFirestoreService<Pergunta> {

  constructor(protected firestore: AngularFirestore) { super(firestore, 'perguntas'); }

}
