export default {
  //emails
  email: `mk1, 아침이멜@hello.word
mk2, 점심이멜@hello.word
mk3, 저녁이멜@hello.word
mj, kkk@aaa.bbb`,

  //equipment infos
  equip_info_columns: `equip_name, 아침, 점심, 저녁`,
  equip_info_data: `AA, mk1, mk2, mk3
BB, mj, mjjjj, mjjjjjjjjj
CC, kakao, akao, bkao`,

  //schema
  pre_text: `Hello
My name is __equip_name__
이건 맑은고딕일까요 아닐까요
내생일은 __birthday__ 입니다. 내 닉네임은 __nickname__ 입니다.`,
  table_columns_label: '장치, 담당, married, age, rest',
  table_columns_hide: '장치',
  post_text: 'Thanks. my phone number is __phone__.',

  //data
  source_variables: `equip_name, owner, birthday, nickname, phone`,
  source_data: `AA, maisy, 910105, mk, 010111222
BB, jinmin, 111111, mj, 1234567777
CC, dalkomm, 222222, coffee, 89898989`,
  table_data_week1: `AA, BB, CC, DD
아침담당자, true, 50, 1
점심담당자, false, 14,0
저녁담당자, false, 14,33`,
  table_data_week2: `AA, BB, CC, DD
icecream, baskin, rabins,cdd
dunkin, donuts, strawberry,55
dam, sosagol, sundae,52
egg, drop, hungry,66`,

  table_data_week3: `AA, BB, CC, DD
second1, false, 1,111
second2, false, 10,bbb`,
};
