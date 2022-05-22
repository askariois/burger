import { IFeed } from "./burger-constructor";

export interface IGET_FEED {
   type: 'GET_FEED';
   payload: string
}

export interface IGET_FEED_SUCCESS {
   type: 'GET_FEED_SUCCESS';
   feed: IFeed[];
}


export interface IGET_FEED_FAILED {
   type: 'GET_FEED_FAILED';
}

export type TReduxIndex = IGET_FEED | IGET_FEED_SUCCESS | IGET_FEED_FAILED;
