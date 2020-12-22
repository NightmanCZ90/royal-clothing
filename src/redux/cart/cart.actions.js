import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({ //payload is optional property and we do not need it in this case
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})