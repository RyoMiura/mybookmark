import { Component, OnInit } from '@angular/core';
import { TagService } from '@app/service/tag/tag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchText: string;

  constructor(private router: Router, private tagService: TagService) { }

  ngOnInit() {
  }

  goSearch(): void {
    var this_ = this;
    this.tagService.findTags()
      .subscribe(tags => {
        var tag = tags.find(tag => tag.name === this_.searchText);
        var id = tag ? tag.id : -1;
        this_.router.navigate(['/bookmarks/search'], { queryParams: { 'tag': id } });
      });
  }

}
