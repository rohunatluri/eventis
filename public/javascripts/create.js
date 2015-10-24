$(document).ready(function(){
    $('#btnAddEvent').on('click', addEvent);
});

function addEvent(event){
    event.preventDefault();
    
    //basic validation from CWB - increase errorCount var if any fields blank
    var errorCount = 0;
    $('#addEvent input').each(function(index, val) {
        if($(this).val() === '') {errorCount++; }
    });
    
    //check to make sure errorCount still zero
    if(errorCount === 0) {
        //if so, combine user info into single object
        var newEvent = {
            'name': $('#addEvent fieldset input#inputEventName').val(),
            'descr': $('#addEvent fieldset input#inputEventDescr').val(),
            //parsing the tag input is ugly; need to implement RE
            'tags': $('#addEvent fieldset input#inputEventTags').val().split(' ').join('').split(',').join('').split('#').filter(function(n){return n!= ''}),
            'poster': $('#addEvent fieldset input#inputEventPoster').val()
        }
        
        //use AJAX to post object to addevent service
        $.ajax({
            type: 'PUT',
            data: newEvent,
            url: '/posts/addevent',
            dataType: 'JSON'
        }).done(function( response ) {
            if(response.msg === ''){
                window.location.href = '/';
                //$(document).load('/');
                /*
                //clear form inputs
                $('addUser fieldset input').val('');
                
                //update the table
                populateTable()
                */
            }
            else {
                //if something goes wrong, alert with returned error msg
                alert('Error: ' + response.msg);
            }
        });
    }
    else {
        // if errorCount > 0, give error
        alert('Please fill in all fields');
        return false;
    }
};