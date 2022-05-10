import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // 该服务对外暴露了它的 messages 缓存
  messages: string[] = [];

  constructor() { }

  // 往缓存中添加一条消息
  add(message: string): void {
    this.messages.push(message);
  }
  // 清空缓存
  clear(): void {
    this.messages = [];
  }
}
