import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('https://react-http-d621f-default-rtdb.europe-west1.firebasedatabase.app/cart.json');     

            if(!response.ok) {
                throw new Error('Getting cart data failed');
            }
            const data = response.json();
            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        }
        catch (error ) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: "Error while fetching data!"
              }));
        }
    }
}



export const sendCartData = (cart) => {
    return async (dispatch) => {

        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: "Sending data..."
          }));


          const sendRequest = async () => {
            const response = await fetch('https://react-http-d621f-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
            {
                method: 'PUT',
                body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
            },
            );

            if(!response.ok) {
            throw new Error('Sending cart data failed');
            }
            
          };


          try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success...',
                message: "Sent cart data succesfully..."
            }));
          } catch (error)  {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: "Error while sending data!"
              }));
          }          
    };
};