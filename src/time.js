displayGreeting()
function getDateAndTime() {
    const today = new Date();
    let day = today.getDay();
    const date = today.getDate();
    let month = today.getMonth();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    
    let monthMap = {
        0: "Jan",
        1: "Feb",
        2: "Mar",
        3: "Apr",
        4: "May",
        5: "Jun",
        6: "Jul",
        7: "Aug",
        8: "Sep",
        9: "Oct",
        10: "Nov",
        11: "Dec",
      };
    
      month = monthMap[month];

    let dayMap = {
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thu",
        5: "Fri",
        6: "Sat",
        0: "Sun",
      };
    
    day = dayMap[day];

    let greeting = "It's " + hours + ":" + minutes + " on " + day + ", " + date + " " + month;

    return greeting;

}

function displayGreeting(){
    document.getElementById("time").innerHTML = getDateAndTime();
    setTimeout(displayGreeting, 2000)

}