import { Injectable } from '@angular/core';
import {BaseFirestoreService} from '../../../shared/services/base-firestore.service';
import {Ocorrencia} from '../domain/ocorrencia';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService extends BaseFirestoreService<Ocorrencia> {

  constructor(protected firestore: AngularFirestore) { super(firestore, 'ocorrencias'); }

}
