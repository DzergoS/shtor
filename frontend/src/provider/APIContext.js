import {createContext} from "react";

export const APIContext = createContext({
  state: {
    cart: [],
    lang: '',
    products: {
      allProducts: [],
      productsToShow: [],
    },
  },
  dispatch: () => {},
});
