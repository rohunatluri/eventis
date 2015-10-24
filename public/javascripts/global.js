/*

 _____ _     _____ _      _____  _  ____    ____  ____  _____ ____  ____  ____  ____  ____  ____  ____ 
/  __// \ |\/  __// \  /|/__ __\/ \/ ___\  /  __\/  __\/  __//  _ \/  _ \/  _ \/  _ \/  _ \/  __\/  _ \
|  \  | | //|  \  | |\ ||  / \  | ||    \  | | //|  \/||  \  | / \|| | \|| | //| / \|| / \||  \/|| | \|
|  /_ | \// |  /_ | | \||  | |  | |\___ |  | |_\\|    /|  /_ | |-||| |_/|| |_\\| \_/|| |-|||    /| |_/|
\____\\__/  \____\\_/  \|  \_/  \_/\____/  \____/\_/\_\\____\\_/ \|\____/\____/\____/\_/ \|\_/\_\\____/ ~D.
                                                                                                       
*/
//data array will give further "event" info
var eventData = []; 
// when DOM is ready =============================
$(document).ready(function(){
    // populate table on initial page load
    populateTable();

    console.log(eventData.length);
    
});

//functions===================================
//populate table with data
function populateTable(){
    //empty content string
    var tableContent = '';

    //JQuery AJAX call
    $.getJSON('/posts/posts', function(data){
        //stick events data array into global object
        eventData = data;

        //for each item in JSON from database, add table row and cells to content string
        $.each(data, function(){ //these are globals; soon: create single global object, make all of tableContent be part of object
            tableContent += '<tr>';
            tableContent +=     '<td>';
            tableContent +=         '<div id = eventWrapper rel="' + this.name + '">'
            tableContent +=             '<div id = voter>'
            tableContent +=                 '<a href= #>'
            tableContent +=                     '<div id = upvote></div>'
            tableContent +=                 '</a>'
            tableContent +=                 '<div id = voteCount>'+this.votes+'</div>'
            tableContent +=                 '<a href= #>'
            tableContent +=                     '<div id = downvote></div>'
            tableContent +=                 '</a>'
            tableContent +=             '</div>'
            tableContent +=             '<div id = event>'
            tableContent +=                 '<div id = eventTitle>'+this.name+'</div>'
            tableContent +=                 '<div id = eventDescription>'+this.descr+'</div>'
            tableContent +=             '</div>'
            tableContent +=         '</div>'
            tableContent +=     '<td>';
            tableContent += '<tr>';
        });

        //inject the whole content string into existing HTML table
        $('#eventsList table tbody').html(tableContent);
        //event link click
        $('#eventsList table tbody').on('click', 'td #eventWrapper', showEventInfo);

        console.log(eventData.length);
        showEventInfoFromIndex(0);
    });
    console.log("table populated");

};

function showEventInfo(event) {
    //retrieve "event" name from link rel attribute
    var thisPostName  = $(this).attr('rel');
    console.log(thisPostName);
    //get index of object based on id value
    var arrayPosition = eventData.map(function(arrayItem) { return arrayItem.name; }).indexOf(thisPostName);
    //get the "event" object
    showEventInfoFromIndex(arrayPosition);
};

// Populate viewport
function showEventInfoFromIndex(index) {
    console.log(index);
    var thisEventObject = eventData[index];
    $('#viewport #eventTitle').text(thisEventObject.name);
    $('#viewport #info #eventDescription').html(thisEventObject.descr);
    $('#viewport #info #creator').text("Creator: "+ thisEventObject.poster);
    $('#viewport #info #date').text("Date: "+ thisEventObject.date);
    $('#viewport #info #time').text("Time: "+ thisEventObject.time);
    $('#viewport #info #location').text("Location: "+ thisEventObject.location);
}
