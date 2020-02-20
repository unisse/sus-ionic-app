import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface BaseEntity {
    uid?: string;
}

export class Util {

    public static treat(value: any, or?: any): any {
        return value ? value : (or ? or : null);
    }

    public static timestamp(date: Date): Timestamp {
        if (date) {
            return Timestamp.fromDate(date);
        } else {
           return null;
        }
    }
}
