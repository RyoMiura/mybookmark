import { Component, OnInit } from '@angular/core';
import { Tag } from '@app/model/tag';
import { TagService } from '@app/service/tag/tag.service';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.scss']
})
export class TagFormComponent implements OnInit {

  public input: string;
  public tags: Tag[];
  public selectList: Tag[];

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tags = [];
    this.getTagList();
  }

  getTagList(): void {
    this.tagService.findTags()
    .subscribe(tags => this.selectList = tags);
  }

  onKeyEnter(event): void {
    this.addTag();
  }

  addTag(): void {
    var inputedTag = this.selectList.find(tag => tag.name === this.input);
    var sameAddedTag = this.tags.find(tag => tag.name === this.input);
    if (inputedTag && !sameAddedTag) {
      this.tags.push(inputedTag);
    }
    this.input = '';
  }

  removeTag(index: number) {
    this.tags.splice(index, 1);
  }
}
