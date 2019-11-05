import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  users = {} as Users;
  userList;
  constructor( private adminServ: AdminService,
    private angularfire: AngularFirestore) { 
        // user list
  this.angularfire.collection('users').snapshotChanges().subscribe(data => {
    this.userList = data.map(e => {
      return{
        key: e.payload.doc.id,
        ...e.payload.doc.data()
      } as Users
    });
    console.log(this.userList)
    
  })

  }

  ngOnInit() {
  }

}
