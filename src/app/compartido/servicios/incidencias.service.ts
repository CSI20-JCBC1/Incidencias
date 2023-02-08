import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Incidencia } from '../interfaz/incidencia';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

private incidencias = "incidencias";
  constructor(private firebase: AngularFirestore) { }
  //CRUD incidencias

  getOne(documentId: string){
    return this.firebase.collection(this.incidencias).doc(documentId).snapshotChanges();
  }

  getAll(){
    return this.firebase.collection(this.incidencias).snapshotChanges();
  }

  create(incidencia: Incidencia){
    return this.firebase.collection(this.incidencias).add(incidencia);
  }

  update(documentId: string, incidencia: Incidencia){
    return this.firebase.collection(this.incidencias).doc(documentId).update(incidencia);
  }

  delete(documentId: string){
    return this.firebase.collection(this.incidencias).doc(documentId).delete();
  }

  getSpecificOne(documentId: string, id: number){
    return this.firebase.collection(this.incidencias, ref => ref.where('id', '==', id)).doc(documentId).snapshotChanges();
  }
}
