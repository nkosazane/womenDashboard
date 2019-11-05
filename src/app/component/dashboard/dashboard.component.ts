import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  itemList: any[];
  userList: any[];
  cafes: any;
  users: any;
  barChart: any;
  config: any;
  collection = { count: 60, data: [] };
  // collection={data[]};
  chart:any = [];
  dlist =[];
  item: any;
  boy: number=0;
  girl: number=0;
  other: number=0;
  Internertcafe=true;
  registeredcafe = true;
  registereduser = true;
  location = true;
  constructor(private firestore:AngularFirestore) {
    
    // user list
  this.firestore.collection('users').snapshotChanges().subscribe(data => {
    this.userList = data.map(e => {
      return{
        key: e.payload.doc.id,
        ...e.payload.doc.data()
      } as Users
    });
    console.log(this.userList)
    
  })

    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    // this.dataService.getItemChanges().subscribe(data => {
    //   this.itemList = data.map(e => {
    //     return {
    //       key: e.payload.doc.id,
    //       ...e.payload.doc.data()
    //     } as InternetCafe;
    //   });
      // console.log(this.itemList);
// paginator
    //   for (var i = 0; i < this.itemList[0].count; i++) {
    //     this.itemList[0].data.push(
    //       {
    //       id: i + 1,
    //         value: "items number " + (i + 1)
    //       }
    //     );
    //   }
    //   this.config = {
    //     itemsPerPage: 5,
    //     currentPage: 1,
    //     totalItems: this.itemList[0].count
    //   };
    // });
    // this.dataService.getUserChanges().subscribe(users => {
    //   this.userList = users
    // }
    // )
    // this.users = this.firestore.collection('users').valueChanges();
    // console.log(this.users)
 
   }
   myChart:any;
  f=[];
  x;
  gender;
  b: number = 0;
  w: number = 0;
  c: number = 0;
  mw: number=0;fw: number=0;ow: number=0;
  mc: number=0;fc: number=0;oc: number=0;
  mb: number=0;fb: number=0;ob: number=0;
    

  ngOnInit() {
    this.firestore.collection('users').valueChanges().subscribe((data:any)=>{
      console.log(data)
     this.f=[{data}]
      console.log(this.f[0].data[0]);
      for(let i=0;i<data.length ;i++){
        let gender=data[i].gender;
        // let race=data[i].ethnicity;

// calculation for gender
if(gender == 'male'){
  this.boy = this.boy +1
  console.log(this.boy)
}
else if(gender == 'female'){
  this.girl = this.girl +1
  console.log(this.girl)
}
else{
  this.other = this.other+1
  console.log(this.other)
}
    this.myChart = new Chart('myChart', {
        type: 'bar',
        data: {
            labels: ['Female', 'Male', 'Others'],
            datasets: [{
                label: '# Gender statistics',
                data: [this.girl,this.boy,this.other],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }
})

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // this.firestore.collection('users').valueChanges().subscribe((data:any)=>{
    //    console.log(data)
    //   this.f=[{data}]
    //    console.log(this.f[0].data[0]);
    //    for(let i=0;i<data.length ;i++){
    //      let gender=data[i].gender;
    //      let race=data[i].ethnicity;
// calculations for race
        // if(race == 'Black'){
        //   this.b = this.b +1
        // }else if(race == 'White'){
        //   this.w = this.w+1
        // }
        // else{
        //   this.c = this.c+1
        // }
// calculation for gender
      // if(gender == 'male'){
      //   this.boy = this.boy +1
      //   console.log(this.boy)
      // }else if(gender == 'female'){
      //   this.girl = this.girl+1
      //   console.log(this.girl)
      // }
      // else{
      //   this.other = this.other+1
      //   console.log(this.other)
      // }
        // this.chart = new Chart('chart',{
        //   type: 'pie',
        //   data: {
        //       labels: ['Black', 'White', 'Coloured'],
        //       datasets: [{
        //           label: '# Ethnicity statistics',
        //           data: [this.b,this.w,this.c],
        //           backgroundColor: [
        //               'rgba(255, 99, 132, 0.2)',
        //               'rgba(54, 162, 235, 0.2)',
        //               'rgba(255, 206, 86, 0.2)',
        //               'rgba(75, 192, 192, 0.2)',
        //               'rgba(153, 102, 255, 0.2)',
        //               'rgba(255, 159, 64, 0.2)'
        //           ],
        //           borderColor: [
        //               'rgba(255, 99, 132, 1)',
        //               'rgba(54, 162, 235, 1)',
        //               'rgba(255, 206, 86, 1)',
        //               'rgba(75, 192, 192, 1)',
        //               'rgba(153, 102, 255, 1)',
        //               'rgba(255, 159, 64, 1)'
        //           ],
        //           borderWidth: 1
        //       }]
        //   },
          // options: {
          //     scales: {
          //         yAxes: [{
          //             ticks: {
          //                 beginAtZero: true
          //             }
          //         }]
          //     }
          // }
      // });
      // graph 2
      // this.chart = new Chart('chart2',{
      //   type: 'bar',
      //   data: {
      //       labels: ['Male', 'Female', 'Other'],
      //       datasets: [{
      //           label: '# Gender statistics',
      //           data: [this.boy,this.girl,this.other],
      //           backgroundColor: [
      //               'rgba(255, 99, 132, 0.2)',
      //               'rgba(54, 162, 235, 0.2)',
      //               'rgba(255, 206, 86, 0.2)',
      //               'rgba(75, 192, 192, 0.2)',
      //               'rgba(153, 102, 255, 0.2)',
      //               'rgba(255, 159, 64, 0.2)'
      //           ],
        //         borderColor: [
        //             'rgba(255, 99, 132, 1)',
        //             'rgba(54, 162, 235, 1)',
        //             'rgba(255, 206, 86, 1)',
        //             'rgba(75, 192, 192, 1)',
        //             'rgba(153, 102, 255, 1)',
        //             'rgba(255, 159, 64, 1)'
        //         ],
        //         borderWidth: 1,
        //     }]
        // },
    //     options: {
    //         scales: {
    //             yAxes: [{
    //               barThickness: 80,
    //                 ticks: {
    //                     beginAtZero: true
    //                 }
    //             }]
    //         }
    //     }
    // });
    //  }
  // graph 3
//   this.firestore.collection('localCafe').valueChanges().subscribe((data:any)=>{
//     // this.f=[{data}]
//     //  console.log(data);
//      for(let i=0;i<data.length ;i++){
//       let d=data[i].user.gender;
//       let e=data[i].user.ethnicity;
//       // console.log(d)
//       // calculation for gender
//     if(d == 'male'&& e=='White'){
//       this.mw = this.mw +1
//       console.log("male white:"+this.mw)
//     }else if(d == 'male'&& e=='Coloured'){
//       this.mc = this.mc +1
//       console.log("male coloured:"+this.mc)
//     }else  if(d == 'male'&& e=='Black'){
//       this.mb = this.mb +1
//       console.log("maleblack:"+this.mb)
//     }
//     // females
//     if(d == 'female'&& e=='White'){
//       this.fw = this.fw +1
//       console.log("f white:"+this.fw)
//     }else  if(d == 'female'&& e=='Coloured'){
//       this.fc = this.fc +1
//       console.log("f coloured:"+this.fc)
//     }else  if(d == 'female'&& e=='Black'){
//       this.fb = this.fb +1
//       console.log("f black:"+this.fb)
//     }
// // graph
// this.chart = new Chart('chart3',{
// type: 'line',
// data: {
//     labels: ['Black', 'White', 'Coloured'],
//     datasets: [{
//       // males
//         label: '# Male statistics per race',
//         data: [this.mb,this.mw,this.mc],
//         borderColor: [
//             // 'rgba(255, 99, 132, 1)',
//             // 'rgba(54, 162, 235, 1)',
//             // 'rgba(255, 206, 86, 1)',
//             // 'rgba(75, 192, 192, 1)',
//             // 'rgba(153, 102, 255, 1)',
//             'rgba(0,0,255, 1)'
//             // rgb(0,0,255)
//         ],
//         borderWidth: 2
//     },
//     {
//         // females
//       label: '# female statistics per race',
//       data: [this.fb,this.fw,this.fc],
//       backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//           'rgba(255, 99, 132, 1)'
//           // 'rgba(54, 162, 235, 1)',
//           // 'rgba(255, 206, 86, 1)',
//           // 'rgba(75, 192, 192, 1)',
//           // 'rgba(153, 102, 255, 1)',
//           // 'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 2
//   }
//   ],
// },
// options: {
//     scales: {
//         yAxes: [{
//             ticks: {
//                 beginAtZero: true
//             }
//         }]
//     }
// }
// });
//     }
//   }
//   )
  //   })
  // }



//   public pieChartLabels:string[] = ['Chrome', 'Safari', 'Firefox','Internet Explorer','Other'];
//   public pieChartData:number[] = [40, 20, 20 , 10,10];
//   public pieChartType:string = 'pie';
//   // events
//   public chartClicked(e:any):void {
//     console.log(e);
//   }
//   public chartHovered(e:any):void {
//     console.log(e);
//   }
//   //chat.js
//   public barChartOptions = {
//     scaleShowVerticalLines: false,
//     responsive: true
//   };
//   public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
//   public barChartType = 'bar';
//   public barChartLegend = true;
//   public barChartData = [
//     {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
//     {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
//   ];
//   pageChanged(event){
//     this.config.currentPage = event;
//   }
//   pageChanged1(event){
//     this.config.currentPage = event;
//   }
//   pageChanged2(event){
//     this.config.currentPage = event;
//   }
//   Internertcafes() {
//             this.registereduser=false;
//             this.registeredcafe=false;
//             this.location=false;
//           this.Internertcafe=true;
//   }
//   registeredcafes(){
//     this.registereduser=false;
//     this.registeredcafe=true;
//     this.location=false;
//   this.Internertcafe=false;
//   }
//   registeredusers(){
//     this.registereduser=true;
//     this.registeredcafe=false;
//     this.location=false;
//   this.Internertcafe=false;
//   }
// locations(){
//   this.registereduser=false;
//   this.registeredcafe=false;
//   this.location=true;
// this.Internertcafe=false;
// }
    }
  
}


