import { Bookmark } from '@app/model/bookmark';
import { TAGS } from '@app/mock/mock-tags';

export const BOOKMARKS: Bookmark[] = [
    { id: 0, title: 'google', url: 'https://www.google.co.jp/', overview: 'google search engin', tags: [TAGS[0], TAGS[1]], referedCount: 0 },
    { id: 1, title: 'Yahoo', url: 'https://www.yahoo.co.jp/', overview: 'Yahoo search engin', tags: [TAGS[0]], referedCount: 0 },
    { id: 2, title: 'bing', url: 'https://www.bing.com/', overview: 'bing search engin', tags: [TAGS[0]], referedCount: 0 },
    { id: 3, title: 'bing', url: 'https://www.bing.com/', overview: 'bing search engin', tags: [TAGS[0]], referedCount: 0 }
];