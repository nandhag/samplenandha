import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-samplepage1',
  templateUrl: './samplepage1.component.html',
  styleUrls: ['./samplepage1.component.css']
})

export class Samplepage1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'samplepro';

  testname:any ='nandhagopal';

  filtername: string = " ";  

  classname ='two';
  classname3 ='three';

  currency =100; 

  quantity=1;
  cost=5;

  colSpans: number = 2;

  itemImageUrl: any = 'https://macmillan-dam.captureweb.co.uk/cdn/macmillan/previews/439664/d2600cec4c0f09bf8e6187a83a066343/0/14665546cf5662d409143d004ffc0c54/131898933.jpg';

  fullName: string = " ";  

  currentcustomer='nandhu';


  users = [{name:'nandha',mark:10,age:88,gender:'male'}, {name:'kavin',mark:20,age:28,gender:'female'}, {name:'goapl',mark:30,age:38,gender:'male'}, 
  {name:'arun',mark:40,age:28,gender:'male'}, {name:'vus',mark:50,age:38,gender:'tran'}]; 

  names = [
    {name:'Jani',country:'Norway'},
    {name:'Carl',country:'Sweden'},
    {name:'Margareth',country:'England'},
    {name:'Hege',country:'Norway'},
    {name:'Joe',country:'Denmark'},
    {name:'Gustav',country:'Sweden'},
    {name:'Birgit',country:'Denmark'},
    {name:'Mary',country:'England'},
    {name:'Kai',country:'Norway'}
  ];

  array=[1,2,3,4,5,6,7,8,9];


  foodstatus='line-through';

  foodlist() {
    this.foodstatus='none';
  }

  

  // @ViewChild('tests') tests: any;

  // ngOnInit() {
  //   console.log(this.tests);
  // }

 
   
  statementalert = () => {
    alert('sample');
  }

  showinput(myinput:any)
  {
  console.log(myinput.value);
  myinput.value='pls fill';
  myinput.focus();
  }

  showvalues(values:any)
  {
  console.log(values);
  }

  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();

  decimal_value: number = 5.123456789;

  a: number = 0.259;
  b: number = 1.3495;

  Value =100;

  firstName: any ;
  lastName: any ;

  clickme()
  {
  console.log(this.firstName);
  console.log(this.lastName);
  }

}

