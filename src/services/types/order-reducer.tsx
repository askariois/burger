export interface IGET_ORDER_NUMBER {
   type: 'GET_ORDER_NUMBER';
}

export interface IGET_ORDER_NUMBER_FAILED {
   type: 'GET_ORDER_NUMBER_FAILED';
}

export interface IGET_ORDER_NUMBER_SUCCESS {
   type: 'GET_ORDER_NUMBER_SUCCESS';
   payload: string;
}

export type TReduxOrder = IGET_ORDER_NUMBER | IGET_ORDER_NUMBER_FAILED | IGET_ORDER_NUMBER_SUCCESS;
