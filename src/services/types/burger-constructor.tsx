export interface IFeed {
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

export interface IFeedArray {
   ingredient: IFeed[];
}

export interface IIngredients {
   ingredient: {
      feedRequest: boolean;
      feedFailed: boolean;
      feed: IFeed[];
   }
}


export interface IConstructorIngredientsList {
   bun: IFeed[];
   ingredients: IFeed[];
}

export interface IClientOffset {
   x: number | null;
   y: number | null;
}

export type TMoveCard = (ragIndex: number, hoverIndex: number) => void;