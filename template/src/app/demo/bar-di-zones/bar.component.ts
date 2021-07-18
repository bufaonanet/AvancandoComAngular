import { Component, OnInit } from '@angular/core';
import { BarService } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers:[
    //BarService,
    {provide:BarService, useClass:BarService}
  ]
})
export class BarComponent implements OnInit {

  bebidas1: string;


  constructor(private barService: BarService) { }

  ngOnInit() {

    this.bebidas1 = this.barService.obterBebidas();

  }

}
