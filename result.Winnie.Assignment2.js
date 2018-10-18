   //js file for the result page, breaking down the Url and searching     
    var stringUrl = document.URL;
    var spl = stringUrl.split('?');
    var args = spl[1].split('&');
    
    var StringName = args[0].split('=');
    var StringSearch = args[1].split('=');
    var StringWidth = args[2].split('=');
    var StringHeight = args[3].split('=');
    
    var newName = StringName[1];
    var newSearch = StringSearch[1];
    var newWidth = StringWidth[1];
    var newHeight = StringHeight[1];

    var searching = "http://www.bing.ca?q="+newSearch;

    document.write("<p> "+newName+" searched for, </p>");
    document.write("<iframe src=\""+searching+ "\"Width=\""+newWidth+"%\" Height=\""+newHeight+"\">");
    document.write("NotSupported </iframe>");
