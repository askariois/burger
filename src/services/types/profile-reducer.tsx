export interface IPROFILE_ADD {
   type: 'PROFILE/ADD';
}

export interface IPROFILE_SUCCESS {
   type: 'PROFILE/SUCCESS';
   data: string
}

export interface IPROFILE_FAILED {
   type: 'PROFILE/FAILED';
}

export interface IPROFILE_UPDATE {
   type: 'PROFILE_UPDATE';
}

export interface IPROFILE_UPDATE_SUCCESS {
   type: 'PROFILE_UPDATE/SUCCESS';
   newData: string;
}

export interface IPROFILE_UPDATE_FAILED {
   type: 'PROFILE_UPDATE/FAILED';
}

export type TReduxProfile = IPROFILE_ADD | IPROFILE_SUCCESS | IPROFILE_FAILED | IPROFILE_UPDATE | IPROFILE_UPDATE_SUCCESS | IPROFILE_UPDATE_FAILED;
