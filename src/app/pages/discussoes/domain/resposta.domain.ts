import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {BaseEntity, Util} from '../../../shared/domain/base-entity.domain';

export interface Resposta extends BaseEntity {
    corpo: string;
    criacao: Timestamp;
    pontuacao: number;
}

export class RespostaBuilder {
    public static create(obj: any): Resposta {
        return {
            corpo: Util.treat(obj.corpo),
            criacao: Util.treat(obj.criacao, Timestamp.now()),
            pontuacao: Util.treat(obj.pontuacao, 0)
        };
    }
}
