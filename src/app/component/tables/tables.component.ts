import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { element } from 'protractor';

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
  donationList:any[];
  chatsList;
  chatsList1;
  chatsList2;
  key:string;
  constructor(private adminServ: AdminService,
    private angularfire: AngularFirestore
    )
     { 


    // user list
  this.angularfire.collection('users').snapshotChanges().subscribe((data:any) => {
   
    this.userList = data.map(e => {
      return{
        key: e.payload.doc.id,
        ...e.payload.doc.data()
      } as Users
    });
    console.log(this.userList)
    
    
  
  })
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

  onDelete(key){
    this.adminServ.deleteUser(key);
    
  }

}
