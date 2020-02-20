import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {BaseEntity} from '../../../shared/domain/base-entity.domain';
import {Tag} from './tag.domain';

export interface Pergunta extends BaseEntity {
    titulo: string;
    descricao: string;
    tags: Tag[];
    criacao: Timestamp;
}
