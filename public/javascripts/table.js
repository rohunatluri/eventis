
// when DOM is ready =============================
$(document).ready(function(){
    // populate table on initial page load
    populateTable();
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
            tableContent += '<td>' + this.poster + '</td>';
            tableContent += '<td>' + this.name + '</td>';
            tableContent += '<td>' + this.tags + '</td>';
            tableContent += '<td>' + this.votes + '</td>';
            tableContent += '<td>' + this.time + '</td>';
            tableContent += '<td>' + this.date + '</td>';
            tableContent += '<td>' + this.location + '</td>';
            tableContent += '<td>' + this.datePosted + '</td>';
            tableContent += '<tr>';
        });

        //inject the whole content string into existing HTML table
        $('#eventsList table tbody').html(tableContent);
    });
    console.log("table populated");

};