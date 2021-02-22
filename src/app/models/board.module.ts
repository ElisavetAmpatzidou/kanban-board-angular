import {Column} from './column.module';
export class Board{
    constructor(public name:string, public columns: Column[]){
        
    }
}