import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
// donator={
// name:"",
// surname:""
// }
// donators:any;
  users = {} as Users;
  donation = {} as Donation;

  userList;

  donationList;

  constructor(private adminServ: AdminService,
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

    // donation list
    this.angularfire.collection('donation').snapshotChanges().subscribe(data => {
      this.donationList = data.map(e => {
        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Donation
      });
      console.log(this.donationList)
    })
  }

  ngOnInit() {
//     this.angularfire.collection('donation').get().then((snapshot)=>{
    
// snapshot.docs.forEach(doc=>{
//   console.log(doc.data())
// })
//     })
   
  }


}
