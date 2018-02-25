window.setInterval(function() {
  var date = new Date();
  var secsAngle = (360*date.getSeconds()/60) +90;
  document.querySelector('.secs').style.transform = "rotate("+secsAngle+"deg)";
  document.querySelector('.digital-seconds').innerHTML = ("0" + date.getSeconds()).slice(-2);
  var minsAngle = (360*date.getMinutes()/60) +90;
  document.querySelector('.mins').style.transform = "rotate("+minsAngle+"deg)";
  document.querySelector('.digital-minutes').innerHTML = ("0" + date.getMinutes()).slice(-2);
  var hoursAngle = (360*date.getHours()/12) +90;
  document.querySelector('.hours').style.transform = "rotate("+hoursAngle+"deg)";
  document.querySelector('.digital-hours').innerHTML = ("0" + date.getHours()).slice(-2);
}, 1000);
