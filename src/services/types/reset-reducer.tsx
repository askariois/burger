export interface IRESET_PASSWORD {
   type: 'RESET_PASSWORD';
}

export interface IRESET_PASSWORD_SUCCESS {
   type: 'RESET_PASSWORD_SUCCESS';
}

export interface IRESET_PASSWORD_FAILED {
   type: 'RESET_PASSWORD_FAILED';
}
export interface IRESET_PASSWORD_CODE {
   type: 'RESET_PASSWORD_CODE';
   payload: string;
}

export interface IRESET_PASSWORD_PASSWORD {
   type: 'RESET_PASSWORD_PASSWORD';
   payload: string;
}


export type TReduxReset = IRESET_PASSWORD | IRESET_PASSWORD_SUCCESS | IRESET_PASSWORD_FAILED | IRESET_PASSWORD_CODE | IRESET_PASSWORD_PASSWORD;
