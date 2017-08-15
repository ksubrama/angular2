import { Component, OnInit } from '@angular/core';
import { data } from '../data';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videoList = data;

  constructor() { }

  ngOnInit() {
  }

}
