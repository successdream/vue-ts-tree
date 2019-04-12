  //两个时间相差多少天
  //========================================begin========================================
  getDays('2015-01-02','2014-03-03');
  private getDays(currentYear,anotherYear){
    const current = currentYear!.split('-');
    const another = anotherYear.split('-');
    const yearDistance = Number(current[0]) - Number(another[0]);
    let allYearDay = 0;
    let allMonthDay = 0;
    let another_month_day = 0;
    const currentDay = Number(current[2]);
    const anotherDay = Number(another[2]);
    if(yearDistance !== 0){
      for(let a = 1; a < yearDistance+1; a++){
        const currentYearDay = this.getYearDay(Number(current[0])-a);
        allYearDay = allYearDay + currentYearDay;
      }
      if(yearDistance === 1){
        const oneYear = this.getYearDay(Number(current[0])-1);
        allYearDay = allYearDay + oneYear;
      }
    }
    //计算当前年的月过去的天数
    if(current[1] !== 1) {
      for(let i = 1; i < current[1]; i++){
        const currentMonthDay = this.getMonthDay(Number(current[0]),Number(current[1])-i);
        allMonthDay = allMonthDay + currentMonthDay;
      }
    }else{
      const oneMonthDay = this.getMonthDay(Number(current[0]),Number(current[1])-1);
      allMonthDay = allMonthDay + oneMonthDay;
    }
    const currentDays = allYearDay + allMonthDay + currentDay;
    for(let i = 1; i < another[1]; i++){
      const amotherMonthDay = this.getMonthDay(Number(another[0]),Number(another[1])-i);
      another_month_day = another_month_day + amotherMonthDay;
    }
    const anotherDays = another_month_day + anotherDay;
    const compareDay = currentDays - anotherDays
    return compareDay;
  }
  //判断一年有多少天
  private getYearDay(y){
    const isLeap = (0===y%4) && (0 !==y%100) || (0===y%400);
    const days = isLeap ? 366 : 365;
    return days;
  }
  //判断一个月有多少天
  private getMonthDay(y,m){
    const itemMonthDay = new Date(y,m,0).getDate();
    return itemMonthDay;
  }
//=======================================end=========================================
// 正则判断汉字
//=======================================start=======================================
var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
//=======================================end=========================================
