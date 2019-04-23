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
//递归找到两个距离最相近的矩形，利用变量提升的原理
//========================================start=======================================
private addRectObj(objs, obj) {
  function getTwoPointDistance (rect1, rect2) {
    //两个矩形中点的位置
    const rect1Center = { x: rect1.xmin + rect1.width / 2, y: rect1.ymin + rect1.height / 2 };
    const rect2Center = { x: rect2.xmin + rect2.width / 2, y: rect1.ymin + rect1.height / 2 };
    //保证是正数
    return Math.sqrt(Math.pow((rect1Center.x - rect2Center.x), 2 ) + Math.pow((rect1Center.y - rect2Center.y), 2 ));
  }

  let indexOfMInValue = objs.length - 1;
  let minValue = Number.MAX_SAFE_INTEGER;
  let isAddToChildren = false;
  
  function isInside(rect1, rect2) {
    //判断矩形框rect2是否处于rect1内
    return rect2.xmin > rect1.xmin 
        && rect2.ymin > rect1.ymin 
        && rect2.xmin + rect2.width < rect1.xmin + rect1.width 
        && rect2.ymin + rect2.height < rect1.ymin + rect1.height;
  }
  //由内向外比较距离最近的两个矩形，利用js的变量提升原理
  objs.forEach((item, index) => {
    if(item.type === 'RECT'){
      if(item.children && item.children.length > 0 && isInside( item.data, obj.data )){
        isAddToChildren = true;
        this.addRectObj(item.children, obj);
      }
      const value = getTwoPointDistance(item.data, obj.data);
      if ( value < minValue) {
        minValue = value;
        indexOfMInValue = index;
      };
    }
  });
  if(!isAddToChildren) objs.splice(indexOfMInValue + 1, 0, obj);
  return objs;
};
//==========================================end=================================================