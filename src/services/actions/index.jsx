export const GET_FEED = 'GET_FEED';
export const GET_FEED_FAILED = 'GET_FEED_FAILED';
export const GET_FEED_SUCCESS = 'GET_FEED_SUCCESS';

export const BUN_INGREDIENTS = 'BUN_INGREDIENTS';
export const SAUCE_INGREDIENTS = 'SAUCE_INGREDIENTS';
export const MAIN_INGREDIENTS = 'MAIN_INGREDIENTS';

export function ingredientLoad(){
   return  function(dispatch) {
      dispatch({
         type: GET_FEED
      })
        fetch('https://norma.nomoreparties.space/api/ingredients').then(res  => {
           return res.json();
       }).then((data) => {
           if (data && data.success)
           {
               dispatch({ type: GET_FEED_SUCCESS, feed: data.data })
           }
           else {
               dispatch({ type: GET_FEED_FAILED })
           }
       }).catch( err => {
      dispatch({
         type: GET_FEED_FAILED
      })
   })
   }
}