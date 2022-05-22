export interface ILOGIN_ADD {
   type: 'LOGIN/ADD';
}

export interface ILOGIN_SUCCESS {
   type: 'LOGIN/SUCCESS';
   success: string;
}


export interface ILOGIN_FAILED {
   type: 'LOGIN/FAILED';
}

export interface ILOGIN_EMAIL {
   type: 'LOGIN/EMAIL';
   payload: string
}

export interface ILOGIN_PASSWORD {
   type: 'LOGIN/PASSWORD';
   payload: string
}




export type TReduxLogin = ILOGIN_ADD | ILOGIN_SUCCESS | ILOGIN_FAILED | ILOGIN_EMAIL | ILOGIN_PASSWORD;
