import { ConstantPool } from '@angular/compiler/src/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  public keyword: string = '';
  public todolist: any[] = [
    // { title: '学习游泳', status: 0 },
    // { title: '学习钢琴', status: 0 },
  ];

  //del
  del(key: number) {
    console.log('index: ' + key);
    console.log(
      'del:' + this.todolist[key].title + ' ' + this.todolist[key].status
    );
  }

  // 定义doAdd事件
  doAdd(event: any) {
    console.log(typeof event);
    console.log(event);
    console.log('target:' + event.target + ' value:' + event.target.value);

    this.todolist.push({
      title: this.keyword,
      status: 0, //0:表示代办 1: 表示已经完成
    });

    this.keyword = ''; //清空输入框中的内容
  }

  constructor() {}

  ngOnInit() {}
}
