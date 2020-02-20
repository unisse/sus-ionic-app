import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {BaseEntity, Util} from '../../../shared/domain/base-entity.domain';
import {Tag} from './tag.domain';

export interface Pergunta extends BaseEntity {
    titulo: string;
    corpo: string;
    tags: Tag[];
    criacao: Timestamp;
}

export class PerguntaBuilder {
    public static create(obj: any): Pergunta {
        return {
            criacao: Util.treat(obj.criacao, Timestamp.now()),
            corpo: Util.treat(obj.corpo),
            tags: Util.treat(obj.tags, []),
            titulo: Util.treat(obj.titulo),
            uid: Util.treat(obj.uid)
        };
    }
}
