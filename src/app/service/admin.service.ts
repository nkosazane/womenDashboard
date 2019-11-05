import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private userDoc: AngularFirestoreDocument<Users>
  private donationDoc: AngularFirestoreDocument<Donation>
  private periodsDoc: AngularFirestoreDocument<Periods>
  private chatsDoc: AngularFirestoreDocument<Chats>

  constructor(private angularfire: AngularFirestore) { }

  //get all users from the database
  getUsers(){
    return this.angularfire.collection('users').snapshotChanges();
  }

  getDonations(key){
    return this.angularfire.collection('donation').doc('donators').collection(key).valueChanges();
  }

  getPeriods(){
    return this.angularfire.collection('tracker').snapshotChanges();
  }

  getChats(){
    return this.angularfire.collection('chats').snapshotChanges();
  }
  deleteUser(key){
    this.angularfire.doc<Users>('users/'+key).delete();
  }
}
