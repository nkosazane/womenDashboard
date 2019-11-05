import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
 
  chats = {} as Chats;

 
  chatsList;
  chatsList1;
  chatsList2;
  constructor(private adminServ: AdminService,
    private angularfire: AngularFirestore) {
    
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
        this.chatsList1 = data.map(e => {
          return{
            key: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Chats
        });
        console.log(this.chatsList1)
      })

          //chats2 list
          this.angularfire.collection('chats2').snapshotChanges().subscribe(data => {
            this.chatsList2 = data.map(e => {
              return{
                key: e.payload.doc.id,
                ...e.payload.doc.data()
              } as Chats
            });
            console.log(this.chatsList2)
          })

   }

  ngOnInit() {
  }

}
