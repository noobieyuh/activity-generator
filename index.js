function activityGenerator()
{
    var activity = "";
    // generate 200 different responses!
    var activitySelect = (Math.floor(Math.random() * 2) + 1);
    // for debug
    console.log(activitySelect);

    if(activitySelect == 1)
    {
        activity = "Go outside and take pictures!";
    }
    if(activitySelect == 2)
    {
        activity = "Go look for geocaches!";
    }

    document.getElementById("activity-output").innerHTML = activity;
}