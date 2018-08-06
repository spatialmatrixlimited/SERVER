var getTime = ()=>{
  var d = new Date();
  var n = d.getUTCHours()+1;
  var a = d.getUTCMinutes();
  var b = d.getUTCSeconds();
  var lenA = String(a).length;
  var lenB = String(b).length;
  if (n >= 12){
    if (n==12){
      hour = 'PM';
    }
    else{
    n = (n - 12);
    hour = 'PM';
    }
  }
  else{
    hour = 'AM';
  }
  if (lenA == 1){
    a = '0' + a;
  }
  if (lenB == 1){
    b = '0' + b;
  }
  var timeIs = n + ':' + a + ':' + b + hour;
  return timeIs;
};

var getDate = ()=>{
  var today = new Date();
  var todayIs = today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear();
  return todayIs;
}

var addDaysToNow = (days)=>{
  var fromNow = new Date(+(new Date()) + days * 24 * 60 * 60 * 1000);
  return fromNow;
}

var getHour = ()=>{
  var d = new Date();
  var todayIs = d.getUTCHours()+1;
  return todayIs;
}

var getDay = ()=>{
  var today = new Date();
  var todayIs = today.getDate();
  return todayIs;
}

var getMonth = ()=>{
  var today = new Date();
  var todayIs = (today.getMonth()+1);
  return todayIs;
}

var getYear = ()=>{
  var today = new Date();
  var todayIs = today.getFullYear();
  return todayIs;
}

var getUTCDate = ()=>{
  var today = new Date();
  return today;
}

var dayDiff=(first, second)=>{
  return Math.round((second-first)/(1000*60*60*24));
}

exports.dayDiff = dayDiff;
exports.addDaysToNow = addDaysToNow;
exports.getTime = getTime;
exports.getDate = getDate;
exports.getHour = getHour;
exports.getDay = getDay;
exports.getMonth = getMonth;
exports.getYear = getYear;
exports.getUTCDate = getUTCDate;
