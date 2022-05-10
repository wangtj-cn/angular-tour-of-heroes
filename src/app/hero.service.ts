import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/hero';
import { HEROES } from 'src/mock-heroes';
import { MessageService } from './message.service';

// @Injectable() 装饰器会接受该服务的元数据对象
@Injectable({
  // 默认用根注入器将你的服务注册成为提供者
  providedIn: 'root'
})
export class HeroService {
  // 这是一个典型的“服务中的服务”场景
  constructor(private messageService: MessageService) { }

  // 模拟异步获取数据
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
