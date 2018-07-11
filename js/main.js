
// I believe we can use this site for our API:     https://www.mysportsfeeds.com/data-feeds/





$(document).ready(function() {
    console.log("hi Bemmes :)");


    var example = "<span>Hey Bemmes! This is how you can use jQuery to select DOM elements if you've never seen it -- \
        super easy JS library to implement</span>";
    $('#example').append(example);

    // Still trying to figure out the authentication for the ajax call which is currently not working and throwing some bad js errors
    getData();

});





function getData() {
    $.ajax ({
        type: "GET",
        url: "https://api.mysportsfeeds.com/v2.0/pull/nba/latest/standings.json",
        dataType: 'json',
        async: false,
        headers: {
<<<<<<< HEAD
            "Authorization": "Basic " + btoa("b604851b-0f22-4982-a034-675c03" + ":" + "mkjointrepo2832")
=======
            "Authorization": "Basic " + btoa("kmtate" + ":" + "MYSPORTSFEEDS")
            // "Authorization": "Basic" + "b604851b-0f22-4982-a034-675c03" + ":" + "mkjointrepo2832",
>>>>>>> 9b6a9ae91aa830c472d7c7f4e02f363c3cab6a3c
        },
        //data: '{ "comment" }',
        success: function (data){
            console.log(data);
        }
    });
};
