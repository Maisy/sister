export default {
  source_variables:`target, birthday, nickname, phone`,
  source_data:`maisy, 910105, mk, 010111222
jinmin, 111111, mj, 1234567777
dalkomm, 222222, coffee, 89898989`,
  pre_text: `Hello
My name is __target__
이건 맑은고딕일까요 아닐까요
내생일은 __birthday__ 입니다. 내 닉네임은 __nickname__ 입니다.`,
  table_columns: "name, married, age",
  table_data: `person1, true, 50
person2, false, 14
person3, false, 14

icecream, baskin, rabins
dunkin, donuts, strawberry
dam, sosagol, sundae
egg, drop, hungry

second1, false, 1
second2, false, 10`,
  post_text: "Thanks. my phone number is __phone__."
};
