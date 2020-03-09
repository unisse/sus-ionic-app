import {BaseEntity} from '../../../shared/domain/base-entity.domain';
import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface Ocorrencia extends BaseEntity {
    criacao: Timestamp;
}
