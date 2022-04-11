import { Component, OnInit, ViewChild } from '@angular/core';
import { Samplepage2Component } from '../samplepage2/samplepage2.component';
import {  FormGroup,FormControl, NgForm } from '@angular/forms';
import { FirstservicesService } from 'src/app/firstservices.service';


@Component({
  selector: 'app-samplepage1',
  templateUrl: './samplepage1.component.html',
  styleUrls: ['./samplepage1.component.css'],
})

export class Samplepage1Component implements OnInit {
  profileForm!: FormGroup;

  infoReceived11 : string[]= [];
  infoReceived12 : string[]= [];
  infoReceived13 : string[]= [];

  constructor(private firstservices:FirstservicesService ) { }

  ngOnInit(): void {
  this.profileForm = new FormGroup({
    'name' :  new FormControl(''),
    'password' :  new FormControl(''),
    'address':  new FormControl(''),
    'inputcity' :  new FormControl('')
  });

}


  onSubmits()
  {
    console.log('value submit',this.profileForm);
    this.profileForm.reset;
    }
    
  

  onSubmit(userForm:NgForm )
  {
    console.log('value submit',userForm);
    }

  getinfoservices1()
  {
    this.infoReceived11=this.firstservices.getinfoReceived1();
  }

  getinfoservices2()
  {
    this.infoReceived12=this.firstservices.getinfoReceived2();
  }

  getinfoservices3()
  {
    this.infoReceived13=this.firstservices.getinfoReceived3();
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

 
  users = [{name:'nandha',mark:10,age:88,gender:'male'}, {name:'kavin',mark:20,age:28,gender:'female'}, {name:'gopal',mark:30,age:38,gender:'male'}, 
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
   
  statementalert = () => {
    alert('sample');
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

