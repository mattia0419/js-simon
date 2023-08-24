let tomorrow = new Date("Aug 24, 2023 19:30:00").getTime();

let countdown = setInterval(function(){
    let now = new Date().getTime();

    let distance = tomorrow - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    if (distance <= 0) {
        clearInterval(countdown);
      }
    }, 1000);
