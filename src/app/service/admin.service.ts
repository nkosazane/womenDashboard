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

  getDonations(){
    return this.angularfire.collection('donation').snapshotChanges();
  }

  getPeriods(){
    return this.angularfire.collection('tracker').snapshotChanges();
  }
}
