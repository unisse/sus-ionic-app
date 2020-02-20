import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

import {map} from 'rxjs/operators';
import * as firebase from 'firebase';
import DocumentData = firebase.firestore.DocumentData;
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

import Query = firebase.firestore.Query;
import CollectionReference = firebase.firestore.CollectionReference;
import {BaseEntity} from '../domain/base-entity.domain';
import {Filtro} from '../domain/filtro.domain';


export class BaseFirestoreService<T extends BaseEntity> {

  constructor(protected firestore: AngularFirestore, protected collection: string) {}

  public findById(id: string): Observable<DocumentSnapshot<DocumentData>> {
    return this.firestore.collection(this.collection).doc<T>(id).get();
  }

  public findByIdAsObj(id: string): Observable<T> {
    return this.findById(id).pipe(map(doc => this.toObj(doc)));
  }

  public createId(): string {
    return this.firestore.createId();
  }

  public findAll(): Observable<DocumentSnapshot<DocumentData>[]> {
    return this.firestore.collection<T>(this.collection).get()
        .pipe(map(snap => snap.docs));
  }

  public findAllAsObj(): Observable<T[]> {
    return this.findAll().pipe(map(docs => docs.map(d => this.toObj(d))));
  }

  public filterCollection(filtros: Filtro[], lastObj?: SearchResult<T>): Observable< SearchResult<T>[]> {
    return this.firestore.collection<T>(this.collection, ref =>
      QueryBuilder.init(ref, this.getDoc(lastObj)).addFiltros(filtros).build()
    ).get().pipe(map(snap => this.mapDocs(snap.docs)));
  }

  private getDoc(lastSearch: SearchResult<T>): DocumentSnapshot<DocumentData> {
    return lastSearch ? lastSearch.doc : null;
  }

  private mapDocs(docs: DocumentSnapshot<DocumentData>[]): SearchResult<T>[] {
    return docs.map(doc => {
      return {obj: this.toObj(doc), doc};
    });
  }

  public docRef(uid: string): DocumentReference {
    return this.firestore.doc<T>(this.collection + '/' + uid).ref;
  }

  public docRefFromCollection(collection: string, uid: string): DocumentReference {
    return this.firestore.doc<T>(collection + '/' + uid).ref;
  }

  public docRefUser(uid: string): DocumentReference {
    return this.docRefFromCollection('info-usuarios', uid);
  }

  protected toObj(doc: DocumentSnapshot<DocumentData>): T {
    const obj: any = doc.data();
    if (obj) {
      obj.uid = doc.id;
    }
    return obj;
  }

  public createAsObj(t: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.create(t).then(doc => {
        resolve(this.toObj(doc));
      }).catch(rej => reject(rej));
    });
  }

  public create(t: T): Promise<DocumentSnapshot<DocumentData>> {
    delete t.uid;
    return new Promise<DocumentSnapshot<DocumentData>>((resolve, reject) => {
      this.firestore.collection(this.collection).add(this.toPlainObj(t)).then(ref => {
        resolve(ref.get());
      }).catch(rej => reject(rej));
    });
  }

  public save(t: T): Promise<T> {
    let id = t.uid;
    delete t.uid;
    if (!id) {
      id = this.firestore.createId();
    }
    return new Promise<T>((resolve, reject) => {
      this.firestore.collection(this.collection).doc<T>(id).set(this.toPlainObj(t)).then(() => {
        t.uid = id;
        resolve(t);
      }).catch(rej => reject(rej));
    });
  }

  private toPlainObj(o: any): any {
    return {...o};
  }

  public updateFromId(id: string, t: Partial<T>): Promise<void> {
    return this.firestore.collection(this.collection).doc<T>(id).update(t);
  }

  public update(t: T, partial: Partial<T>): Promise<void> {
    return this.firestore.collection(this.collection).doc<T>(t.uid).update(partial);
  }

  public delete(t: T): Promise<void> {
    return this.firestore.collection(this.collection).doc<T>(t.uid).delete();
  }

}

export class QueryBuilder {

  private query: Query<DocumentData>;
  private readonly last: DocumentSnapshot<DocumentData>;

  private constructor(ref: CollectionReference<DocumentData>, last: DocumentSnapshot<DocumentData>) {
    this.last = last;
    this.query = ref;
  }

  public static init(ref: CollectionReference<DocumentData>, last?: DocumentSnapshot<DocumentData>): QueryBuilder {
    return new QueryBuilder(ref, last);
  }

  public addFiltro(filtro: Filtro): QueryBuilder {
    this.query = filtro.filter(this.query);
    return this;
  }

  public addFiltros(filtros: Filtro[]): QueryBuilder {
    filtros.forEach(f => this.addFiltro(f));
    return this;
  }

  public build(): Query<DocumentData> {
    const query = this.query.orderBy('nome').limit(Constants.limit);
    return this.treatForLast(query);
  }

  private treatForLast(query: Query<DocumentData>): Query<DocumentData> {
    if (this.last) {
      return query.startAfter(this.last);
    } else {
      return query;
    }
  }

}

export interface SearchResult<T extends BaseEntity> {
  obj: T;
  doc: DocumentSnapshot<DocumentData>;
}

export class Constants {
  static limit = 11;
}
