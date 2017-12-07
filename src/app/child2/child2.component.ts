import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  number=0
  constructor(private _serviceService:  ServiceService) { }

  ngOnInit() {
    this._serviceService.numbers= this._serviceService.retrieveNumbers();
  }
  onClickDiff(){
    var total=0;
    var total2=0;
    for(let num in this._serviceService.numbers){
      total += this._serviceService.numbers[num];
    }
    for(let nums in this._serviceService.numbers2){
      total2 += this._serviceService.numbers2[nums];
    }
    this.number = (total - total2);
    console.log(total2)
  }

}
