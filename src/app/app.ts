import { Component, OnInit } from '@angular/core';
import { SharedPic } from './shared-pic/shared-pic';
import { SharedPicList } from './shared-pic-list/shared-pic-list';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [SharedPic, SharedPicList, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
