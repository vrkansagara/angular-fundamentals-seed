import { Component } from '@angular/core';


interface Child{
  name: string;
  age :number;
}
interface Passenger{
  id: number,
  name:string,
  checkedIn:boolean,
  checkedInDate: number | null,
  children: Child[] | null
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})

export class AppComponent {
  name : string;
  logo : string;
  appName: string;
  search : string ='';
  passengers : Passenger[];

  constructor(){
    this.name = 'Vallabh Kansagara';
    this.logo = '/images/favicon.png'
    this.appName = 'Skeleton Application'

    this.passengers = [
      {
        id:1,
        name:'VK',
        checkedIn:true,
        checkedInDate: null,
        children : null
      },
      {
        id:2,
        name:'KK',
        checkedIn:false,
        checkedInDate:11312313125341245,
        children : null
      },
      {
        id:3,
        name:'MK',
        checkedIn:true,
        checkedInDate:354614423442364423,
        children : [
          {
            name:'Shyama',
            age:3
          },
          {
            name:'Vrunda',
            age:1
          }
        ]
      }
    ];
  }

  handleClick(value  : string){
    console.log(value)
  }

  handleChange(value :string){
    console.log(value);
    this.search = value;
  }
}
