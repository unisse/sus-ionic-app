import * as firebase from 'firebase';
import DocumentData = firebase.firestore.DocumentData;
import CollectionReference = firebase.firestore.CollectionReference;
import Query = firebase.firestore.Query;


export interface Filtro {
    uid: string;
    filter(ref: CollectionReference<DocumentData> | Query<DocumentData>): Query<DocumentData>;
}

export class FiltroUtil {
    public static remove(filtro: Filtro, filtros: Filtro[]): Filtro[] {
        return filtros.filter(f => f.uid !== filtro.uid);
    }
}

export class StartWithFilter implements Filtro {

    uid = 'StartWithFilter';

    private readonly startWith: string;

    constructor(startWith: string) {
        if (startWith) {
            this.startWith = startWith.toLowerCase();
        }
    }

    public filter(ref: CollectionReference<DocumentData> | Query<DocumentData>): Query<DocumentData> {
        return ref.where('nome', '>=', this.startWith)
            .where('nome', '<', this.endWith(this.startWith));
    }

    private endWith(param: string): string {
        return param.replace(/.$/, c => String.fromCharCode(c.charCodeAt(0) + 1));
    }

}
