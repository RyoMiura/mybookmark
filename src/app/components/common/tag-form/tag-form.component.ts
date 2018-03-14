import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from '@app/model/tag';
import { TagService } from '@app/service/tag/tag.service';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.scss']
})
export class TagFormComponent implements OnInit {

  @Input() tags: Tag[];
  @Output() addTag = new EventEmitter<Tag>();
  @Output() removeTag = new EventEmitter<number>();

  public input: string;
  public selectList: Tag[];

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.getTagList();
  }

  getTagList(): void {
    this.tagService.findTags()
    .subscribe(tags => this.selectList = tags);
  }

  onKeyEnter(event): void {
    this.add();
  }

  add(): void {
    var inputedTag = this.selectList.find(tag => tag.name === this.input);
    if (inputedTag) {
      this.addTag.emit(inputedTag);
    }
    this.input = '';
  }

  remove(index: number) {    
    this.removeTag.emit(index);
  }
}
