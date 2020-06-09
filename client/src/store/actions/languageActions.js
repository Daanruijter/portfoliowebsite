import { SEND_LANGUAGE_ENGLISH } from "./languageTypes";
import { SEND_LANGUAGE_DUTCH } from "./languageTypes";

export const sendLanguageEnglish = (english) => {
  return {
    type: SEND_LANGUAGE_ENGLISH,
    payload: { english },
  };
};

export const sendLanguageDutch = (dutch) => {
  return {
    type: SEND_LANGUAGE_DUTCH,
    payload: { dutch },
  };
};
