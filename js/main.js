
// I believe we can use this site for our API:     https://www.mysportsfeeds.com/data-feeds/

// Just throwing some methods in here but we can architect and modularize later
// Also decide how we serve up our HTML - i dont know enough about implmenting JSP or templates 

var object = callApi();


$(document).ready(function() {

    $('#standings').click(() => renderStandings(object));

})

function renderStandings(object) {
    $('.standings-header').addClass('active');
    object.forEach((teamEl) => {
    $('.standings-content').append(
        "<div class=\"row\"> \
            <div class=\"col-sm-1\">" +teamEl.rank+ "</div> \
            <div class=\"col-sm-2\">" +teamEl.team.City+ "</div> \
            <div class=\"col-sm-2\">" +teamEl.team.Name+ "</div> \
            <div class=\"col-sm-1\">" +teamEl.stats.GamesBack["#text"]+ "</div> \
            <div class=\"col-sm-1\">" +teamEl.stats.Wins["#text"]+ "</div> \
            <div class=\"col-sm-1\">" +teamEl.stats.Losses["#text"]+ "</div> \
        </div>"
    )});
}

function callApi() {
    return $.ajax ({
        type: "GET",
        url: "https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/overall_team_standings.json",
        dataType: 'json',
        async: false,
        headers: {
            "Authorization": "Basic " + btoa("b604851b-0f22-4982-a034-675c03" + ":" + "mkjointrepo2832")
        },
        // data: '{ "comment" }',  --- I am not sure why we need this piece of code but it was messing with the response URL so I commented out
        success: function (data){
            return data;
        }
    }).responseJSON.overallteamstandings.teamstandingsentry;
}