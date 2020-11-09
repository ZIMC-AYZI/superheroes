export const userNickNameRegExp = new RegExp(/^[a-z]*?([-_ ][a-z]+){0,1}$/i);
export const userPasswordRegExp = new RegExp(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$%.&!-]).{6,}/);
export const userEmailRegExp = new RegExp(/^([\w\d_\-])+(([^\.]*\.[^\.]*)?){1,3}@([\w\d]){1,5}(.com|.co|.org|.net|.us)/);
export const findHeroRegExp = new RegExp(/^[a-zA-Z ]*$/);
