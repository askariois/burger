export interface IREGISTER_ADD {
   type: 'REGISTER_ADD';
}

export interface IREGISTER_SUCCESS {
   type: 'REGISTER_SUCCESS';
}

export interface IREGISTER_FAILED {
   type: 'REGISTER_FAILED';
   payload: string;
}
export interface IREGISTER_NAME {
   type: 'REGISTER_NAME';
   payload: string;
}

export interface IREGISTER_EMAIL {
   type: 'REGISTER_EMAIL';
   payload: string;
}

export interface IREGISTER_PASSWORD {
   type: 'REGISTER_PASSWORD';
   payload: string;
}

export type TReduxRegister = IREGISTER_ADD | IREGISTER_SUCCESS | IREGISTER_FAILED | IREGISTER_NAME | IREGISTER_EMAIL | IREGISTER_PASSWORD;
