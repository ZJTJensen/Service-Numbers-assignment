import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  numbers2: number[]=[];
  constructor(private _serviceService:  ServiceService) { }

  ngOnInit() {
    this.numbers2= this._serviceService.retrieveNumbers2();
  }
  onClicker(){
    var math= Math.floor(Math.random() * 6) + 1  
    this._serviceService.addNumber2(math)
  }
}
