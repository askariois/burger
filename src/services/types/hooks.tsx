export interface LocationState {
   from: {
      pathname: string;
   };
}


export interface IElement {
   _id: string;
   type: string;
   proteins: number;
   price: number;
   name: string;
   key: string;
   image_mobile: string;
   image_large: string;
   image: string;
   fat: number;
   carbohydrates: number;
   calories: number;
}