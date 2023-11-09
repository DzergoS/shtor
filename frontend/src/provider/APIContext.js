import {createContext} from "react";

export const APIContext = createContext({
  cart: [],
  dispatchCart: () => {},
  lang: '',
  setLang: () => {},
});
