import {Injectable} from '@angular/core';
import {BaseFirestoreService} from '../../../shared/services/base-firestore.service';
import {Hospital} from '../domain/hospital';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HospitalService extends BaseFirestoreService<Hospital> {

  constructor(protected firestore: AngularFirestore) { super(firestore, 'hospitais'); }
}
