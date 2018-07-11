
// I believe we can use this site for our API:     https://www.mysportsfeeds.com/data-feeds/

// Just throwing some methods in here but we can architect and modularize later
// Also decide how we serve up our HTML - i dont know enough about implmenting JSP or templates 

var object = callApi().overallteamstandings.teamstandingsentry;


$(document).ready(function() {

    object.forEach((el) => renderTeamRow(el));

})

function renderTeamRow(team) {
    var rank = team.rank;
    var teamCity = team.team.City;
    var teamName = team.team.Name;
    var gamesBack = team.stats.GamesBack["#text"];
    var wins = team.stats.Wins["#text"];
    var losses = team.stats.Losses["#text"];

    var standingsRow = 
        "<div class=\"row\"> \
            <div class=\"col-lg-1\">" +rank+ "</div> \
            <div class=\"col-lg-2\">" +teamCity+ "</div> \
            <div class=\"col-lg-2\">" +teamName+ "</div> \
            <div class=\"col-lg-1\">" +gamesBack+ "</div> \
            <div class=\"col-lg-1\">" +wins+ "</div> \
            <div class=\"col-lg-1\">" +losses+ "</div> \
        </div>";

    $('.standings-rows').append(standingsRow);
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
        // data: '{ "comment" }',
        success: function (data){
            return data;
        }
    }).responseJSON;
}