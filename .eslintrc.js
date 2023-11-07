module.exports = {
  //extends: ["eslint:recommended", "eslint-config-prettier"], // prettier 에 있는 설정들과 충돌하지 않게 해줌
  extends: ["eslint:recommended", "plugin:prettier/recommended"], // eslint 명령으로 prettier 까지 한번에 실행하게 해줌
  // rules: {
  //   "no-unexpected-multiline": "error",
  //   "no-extra-semi": "error", // --fix 옵션 사용시 자동으로 수정해줌
  // },
  env: {
    browser: true,
    es2021: true,
    node: true,
    amd: true,
  },
};
