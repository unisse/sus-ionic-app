import {BaseEntity, Util} from '../../../shared/domain/base-entity.domain';

export interface Hospital extends BaseEntity {
    nome: string;
}

export class HospitalBuilder {
    public static create(obj: any): Hospital {
        return {
            nome: Util.treat(obj.nome)
        };
    }
}
