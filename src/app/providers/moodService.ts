import {Injectable, EventEmitter} from '@angular/core';

@Injectable({
    providedIn: 'root' // <- ADD THIS
})

export class moodService{
  itemCountFilter = new EventEmitter();
  itemClearFilter = new EventEmitter();
listRegion:any= [];
listData = [];
objectFilter:any = {};
listDataFilter:any = [];
listAllData:any = [];
listSlideData: any[];


}