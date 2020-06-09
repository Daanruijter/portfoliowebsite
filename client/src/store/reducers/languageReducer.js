import { SEND_LANGUAGE_ENGLISH } from "../actions/languageTypes";
import { SEND_LANGUAGE_DUTCH } from "../actions/languageTypes";

const initialState = {
  english: true,
  dutch: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_LANGUAGE_ENGLISH:
      return {
        ...state,
        english: action.payload.english,
      };
    case SEND_LANGUAGE_DUTCH:
      return {
        ...state,
        dutch: action.payload.dutch,
      };
    default:
      return state;
  }
};
export default reducer;
