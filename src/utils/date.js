/**
 *  yyyyMMdd 포맷으로 반환
 *  https://heum-story.tistory.com/27
 */
export function getFormatDate(date) {
  var year = date.getFullYear(); //yyyy
  var month = 1 + date.getMonth(); //M
  month = month >= 10 ? month : '0' + month; //month 두자리로 저장
  var day = date.getDate(); //d
  day = day >= 10 ? day : '0' + day; //day 두자리로 저장
  return year + '' + month + '' + day;
}
