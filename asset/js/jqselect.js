$(function(){
    // alert("Hi")

    // By id
    // $('#first') .addClass('highlight');

    // By element/ tag
    // $('p') .addClass('highlight');

    // By class
    // $('.chosen').addClass('highlight');

    // Combination
    // $('#first, .chosen') .addClass('highlight'); 

    // Contains
    // $('li:contains("Three")') .addClass('highlight');

    // $('li:odd').addClass('highlight');
    // $('li:even').addClass('highlight');

    // next, previous
    // $('li:contains("Three")') .next() .addClass('highlight');
    // $('li:contains("Three")') .prev() .addClass('highlight');


// Siblings, Parent
    // $('li:contains("Three")') .siblings() .addClass('highlight');
    // $('li:contains("Three")') .parent() .addClass('highlight');

    // $('li:nth-child(1)') .addClass('highlight');

    // Attribute
    // $('p[name="mySecondPara"]').addClass('highlight');

    // $('p[name!="mySecondPara"]').addClass('highlight');

    // $('p').not('[name]').addClass('highlight');

    // $(':header').addClass('highlight');

    $('p:empty').text('You seemed lonely so I gave you some text')

});