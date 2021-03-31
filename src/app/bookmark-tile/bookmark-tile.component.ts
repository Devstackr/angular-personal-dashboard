import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../shared/bookmark.model';

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.scss']
})
export class BookmarkTileComponent implements OnInit {

  @Input() bookmark: Bookmark

  tileIconSrc: string

  faviconError: boolean
  
  constructor() { }

  ngOnInit(): void {
    this.tileIconSrc = this.bookmark.url.origin + '/favicon.ico'
  }

}
