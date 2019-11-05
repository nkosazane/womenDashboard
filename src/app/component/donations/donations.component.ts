import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {
  users = {} as Users;
  donation = {} as Donation;
  chats = {} as Chats;

  userList;
  donationList:any[];
  chatsList;
  chatsList1;
  chatsList2;
  key:string;
  constructor(private adminServ: AdminService,
    private angularfire: AngularFirestore)
     {
    this.angularfire.collection("users").valueChanges().subscribe((data:any)=>{
      data.forEach(element =>{
        this.key=element.userid
        console.log(element)
        this.angularfire.collection('donation').doc(this.key).collection('donations').snapshotChanges().subscribe(data => {
          for(let i=0 ; i< data.length ;i++){
            this.donationList.push( data.map(e => {
              return{
                key: e.payload.doc.id,
                ...e.payload.doc.data()
              } as Donation
            })[i]);
            
          }
         
        })
      })
      console.log("jj"+this.donationList)
    })
     // donation list
  
     this.angularfire.collection('donation').valueChanges().subscribe(data => {
      this.donationList = data;
        console.log(data)
      });   
      this.donationList =[]
  }

  ngOnInit() {
  }

}
