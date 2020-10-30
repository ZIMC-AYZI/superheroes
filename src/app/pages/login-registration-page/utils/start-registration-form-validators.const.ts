import {
  userEmailRegExp,
  userNickNameRegExp,
  userPasswordRegExp
} from "../../../shared/utils/constants/regular-expressions.const";

export const START_REGISTRATION_FORM_VALIDATORS_CONST = {
  userNickNamePattern: userNickNameRegExp,
  userNickNameMinLength: 8,
  userPasswordPattern: userPasswordRegExp,
  userEmailPattern: userEmailRegExp
};
