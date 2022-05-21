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
   ingredient: Array<IFeed>;
}

export interface IIngredients {
   ingredient: {
      feedRequest: boolean;
      feedFailed: boolean;
      feed: IFeedArray;
   }
}