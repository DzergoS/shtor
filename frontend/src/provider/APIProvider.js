import React, {useMemo, useReducer} from "react";
import { APIContext } from "./APIContext";
import langReducer from "provider/reducers/lang";
import cartReducer from "provider/reducers/cart";
import emailReducer from "./reducers/email";

const APIProvider = (props) => {

  const [state, dispatch] = useReducer(
      (state, action) => ({
        lang: langReducer(state.lang, action),
        cart: cartReducer(state.cart, action),
        email: emailReducer(state.email, action),
      }),
      {
        lang: 'ua',
        cart: [{
          src: '',
          _id: '12312412312',
          category: 'OBERIH',
          title: 'Comb pendant',
          desc: 'Wood/9,5x4cm',
          seashell: 'flex',
          celestial: 'silver',
          quantity: 1,
          price: 80,
        }],
        email: '',
      }
  );

  const contextValue = useMemo(
    () => ({ state, dispatch}),
    [state, dispatch]
  );

  // console.log('lang', lang);
  // console.log('lang', lang);

  return (
    <APIContext.Provider value={contextValue}>
      {props.children}
    </APIContext.Provider>
  );
}

export default APIProvider
