//For Date
var showCurrentdate = function(){
  var date = document.getElementById('date');
  
  var currentDate = new Date();
  
  var day = currentDate.getDate();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();
  
  
  var todayDate = day + '/' + month + '/' + year;
 
    date.innerText = todayDate;
}

//For time
var showCurrentTime = function()
{
   
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
	  if (hours >= 12)
	  {
		  meridian = "PM";
	  }

	  if (hours > 12)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian;
 
    clock.innerText = clockTime;
};

  var updateClock = function() 
{
  var time = new Date().getHours();
  showCurrentTime();
  showCurrentdate();
};
updateClock();

//For increment of Second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);