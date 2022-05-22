export interface IOPEN_MODAL {
   type: 'OPEN_MODAL';
   modal: string;
   id: string;
}

export interface ICLOSE_MODAL {
   type: 'CLOSE_MODAL';
   modal: string;
}


export interface IGOPEN_MODAL_ORDER {
   type: 'OPEN_MODAL_ORDER';
   modalOrder: string
}

export interface ICLOSE_MODAL_ORDER {
   type: 'CLOSE_MODAL_ORDER';
   modalOrder: string
}


export type TReduxItem = IOPEN_MODAL | ICLOSE_MODAL | IGOPEN_MODAL_ORDER | ICLOSE_MODAL_ORDER;
