const zp = n => n<10 ? "0"+n : n;

const isoDate = (d) => {
  if(!d) d = new Date();
  var year = d.getFullYear(); //2019
  var month = zp(d.getMonth() + 1);
  var day = zp(d.getDate());
  var hour = zp(d.getHours());
  var min = zp(d.getMinutes());
  var sec = zp(d.getSeconds());
  return year+'-'+month+'-'+day+' '+hour+':'+min+':'+sec; //2019-10-20 15:23:09
}
module.exports = {
  zp, isoDate
}