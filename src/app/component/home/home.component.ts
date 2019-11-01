import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { AdminService } from 'src/app/service/admin.service';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users = {} as Users;
  donation = {} as Donation;
  chats = {} as Chats;

  userList;
  donationList;
  chatsList;
  chatsList1;
  chatsList2;

  constructor(public authService: AuthService,
    private adminServ: AdminService,
    private angularfire: AngularFirestore
    ) {
      
  
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
