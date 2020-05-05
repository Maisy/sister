export default {
  //emails
  email: `Dave, Dave@hello.word
Roberto, Roberto@hello.word
Claude, Claude@ccc.word
Glen, Glen@hello.word
Luwis, Luwis@hello.word
Aidan, Aidan@hello.word
kakao, kakao@hello.word
Blake, Blake@aaa.bbb
Liam, Liam@bbbbb.com
Milton, Milton@kkkk.bbb
Jorge, JJorge@aaa.bbb`,

  //equipment infos
  equip_info_columns: `ID, 치킨팀, 피자팀, 닭도리탕팀`,
  equip_info_data: `MBA310, Dave, Roberto, Luwis
MBAB10, Jorge, Claude, Glen
MBAB20, kakao, Blake, Aidan`,

  //schema
  pre_text: `[BMP] __Req No.__ / __Discipline__ - VP Out pending 현황 송부의 件
수신 : 수신자 제위
발신 : Maisy 대리 / 장치 공정관리

안녕하세요.
업무에 노고가 많으십니다.
BMP 프로젝트 '__Req No.__ / __Discipline__ - __Supplier__' 관련 VP OUT pending 현황 송부 드립니다.

<VP OUT pending 현황>`,
  table_columns_label: '구분, 2월 1주, 2월 2주, 2월 3주',
  table_columns_hide: '장치',
  table_rows_label: '설계, 공정관리, 조달검사, PE, QA/QC, 발주처 대기, Total',
  post_text: `첨부파일 확인 후, 지연 중인 문건들에 대한 검토 및 VP IOC 부탁드립니다.

발주처 Comment 대기 문서(노란색으로 표시된 문서)에 대해서는 발주처 Comment 접수 후 빠른 VP IOC 진행 부탁 드립니다.

문의사항 있으시면 연락 부탁 드립니다.
감사합니다.`,

  //data
  source_variables: `Req No., Discipline, Supplier`,
  source_data: `MBA310,HYDROGEN PLANT STEAM REFORMER,TECHNIP FMC
MBAB10,SRU REACTION FURNACE-WASTE HEAT BOILER AND STEAM DRUM,ZEECO
MBAB20,INCINERATOR PACKAGE,ZEECO`,
  table_data_rows1: '조달검사, PE, 발주처 대기, 공정관리, Total',
  table_data_week1: `MBA310, MBAB20, MDA110
4,5,0
1,6,1
3,0,2
5,1,2
0,0,4`,
  table_data_rows2: '발주처 대기, PE, 공정관리, Total',
  table_data_week2: `MBA310, MBAB10, MCA110, MDA110
5,1,1,2
1,2,1,1
2,1,0,1
3,0,1,0`,
  table_data_rows3: 'QA/QC, PE, 발주처 대기, 공정관리, Total',
  table_data_week3: `MBA310, MDA110, MEA120
8,6,1
1,0,0
0,0,0
1,1,1
0,0,3`,
};
