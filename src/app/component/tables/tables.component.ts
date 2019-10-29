import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  users = {} as Users;
  donation = {} as Donation;
  chats = {} as Chats;

  userList;
  donationList;
  chatsList;

  constructor(private adminServ: AdminService,
    private angularfire: AngularFirestore) { 

    //user list
  this.angularfire.collection('users').snapshotChanges().subscribe(data => {
    this.userList = data.map(e => {
      return{
        key: e.payload.doc.id,
        ...e.payload.doc.data()
      } as Users
    });
    console.log(this.userList)
    
  })

    //donation list
    this.angularfire.collection('donation').snapshotChanges().subscribe(data => {
      this.donationList = data.map(e => {
        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Donation
      });
      console.log(this.donationList)
    })

    //chats list
    this.angularfire.collection('chats').snapshotChanges().subscribe(data => {
      this.chatsList = data.map(e => {
        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Chats
      });
      console.log(this.chatsList)
    })

      //chats1 list
      this.angularfire.collection('chats1').snapshotChanges().subscribe(data => {
        this.chatsList = data.map(e => {
          return{
            key: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Chats
        });
        console.log(this.chatsList)
      })

          //chats2 list
          this.angularfire.collection('chats2').snapshotChanges().subscribe(data => {
            this.chatsList = data.map(e => {
              return{
                key: e.payload.doc.id,
                ...e.payload.doc.data()
              } as Chats
            });
            console.log(this.chatsList)
          })

  }

  ngOnInit() {
  }

}
