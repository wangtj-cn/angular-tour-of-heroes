import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/hero';
import { HEROES } from 'src/mock-heroes';

// @Injectable() 装饰器会接受该服务的元数据对象
@Injectable({
  // 默认用根注入器将你的服务注册成为提供者
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // 模拟异步获取数据
  getHeroes(): Observable< Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
