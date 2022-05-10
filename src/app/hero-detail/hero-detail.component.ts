import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // hero 属性必须是一个带有 @Input() 装饰器的输入属性，因为外部的 HeroesComponent 组件将会绑定到它。
  @Input() hero? : Hero;
  
  constructor() { }

  ngOnInit(): void {
  }

}
