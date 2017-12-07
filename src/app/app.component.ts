import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  numbers: number[]=[];
  constructor(private _serviceService:  ServiceService) { }

  ngOnInit() {
    this.numbers= this._serviceService.retrieveNumbers();
  }
  onClick(){
    var math= Math.floor(Math.random() * 6) + 1  
    this._serviceService.addNumber(math)
  }
}
