import { Component, OnInit, Input } from '@angular/core';
import { Tag } from '@app/model/tag';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  @Input() tags: Tag[];
  @Input() isLink: boolean;

  constructor() { }

  ngOnInit() {
  }

}
