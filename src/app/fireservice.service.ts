import { Injectable } from '@angular/core';
import { addDoc, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Data } from './data';
import { collection } from '@firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class FireserviceService {
  getEditData:  any = []

  constructor(private fService: Firestore) { }


  // add new data code here

  addData(data: Data) {
    data.id = doc(collection(this.fService, 'id')).id
    return addDoc(collection(this.fService, 'Datas'),  data)
  }

  // get all data from Database
  getData() {
    let dataRef = collection(this.fService, 'Datas')
    return collectionData(dataRef, { idField: 'id' })
  }

  // Delete all data from Database
  deleteData(data: Data) {
    let docRef = doc(collection(this.fService, 'Datas'), data.id);
    return deleteDoc(docRef)
  }

  setDataById(data: Data) {
    this.getEditData = data
  }

  getDataById() {
    return this.getEditData
  }


  // Update Data from Data base
  updateData(data: Data, Datas: any) {
    let dataRef = doc(this.fService, `Datas/${data}`);
    return updateDoc(dataRef, Datas)
  }
}

