export const INGREDIENT_LOAD = 'INGREDIENT_LOAD';
export const LOADER_DISPLAY_ON = 'LOADER_DISPLAY_ON';
export const LOADER_DISPLAY_OFF = 'LOADER_DISPLAY_OFF';

export function ingredientLoad(){
      return async function(dispatch) {
         try {
            const res = await fetch(`https://norma.nomoreparties.space/api/ingredients`);
            const data = await res.json();
         console.log(res);
            dispatch({
               type: INGREDIENT_LOAD,
               data:data
            });
         } catch (error) {
            console.error("Ошибка:", error);
        }
   }
}