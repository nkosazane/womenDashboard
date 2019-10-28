import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private userDoc: AngularFirestoreDocument<Users>
  private donationDoc: AngularFirestoreDocument<Donation>
  private periodsDoc: AngularFirestoreDocument<Periods>

  constructor(private angularfire: AngularFirestore) { }

  //get all users from the database
  getUsers(){
    return this.angularfire.collection('users').snapshotChanges();
  }

  getDonations(key){
    return this.angularfire.collection('donation').doc(key).collection('donators').valueChanges();
  }

  getPeriods(){
    return this.angularfire.collection('tracker').snapshotChanges();
  }
}
