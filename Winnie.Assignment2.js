//js file for html form page, embeds form inputs to the url string
    function testResults(form)
    {
    var input1 = form.myName.value;
    var input2 = form.mySearch.value;
    var input3 = form.myWidth.value;
    var input4 = form.myHeight.value;
    
    alert("You are: "+input1+" and you searched for: "+input2);
    
    var newUrl = "result.Winnie.Assignment2.html?myName="
    +encodeURIComponent(input1)
    +"&mySearch="
    +encodeURI(input2)
    +"&myWidth="
    +encodeURI(input3)
    +"&myHeight="
    +encodeURI(input4);
    
    window.location.replace(newUrl);
    }