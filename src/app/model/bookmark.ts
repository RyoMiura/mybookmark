import { Tag } from "@app/model/tag";

export class Bookmark {
    public id: number;
    public title: string;
    public url: string;
    public overview: string;
    public tags: Tag[];
}
