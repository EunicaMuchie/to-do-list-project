//check off specific Todos by clicking

//-------------------------------------------------------------------------------
//                    longer code 
//-------------------------------------------------------------------------------
// $('li').click(function(){
//     if($(this).css('color') === 'rgb(128, 128, 128)'){
//        $(this).css({color: "black", textDecoration: 'none'});
//     }
    
//     else{
//         $(this).css({color:"gray", textDecoration: "line-through"});
        
//     }

// });

//-------------------------------------------------------------------------------
//                     shorter code
//-------------------------------------------------------------------------------
//we could use this shorter code to do the same thing the above code does
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');

});

//--------------------------------------------------------------------------------
//            click on X to delete todo item
//--------------------------------------------------------------------------------
//to stop other actions from firiing in on the li after the span has been clicked we use an event/ evt to stop propagation occuring to the parent elements in which the span lies.
$('ul').on('click', 'span', function(event){ //on adds listners for all potential future elements
 $(this).parent().fadeOut(1000, function(){ //fadeout does not remove the entire Li but it just hides it whilst the element is still visible within our html,,, in the long run if we have a million todos this could slow down our page since the todos are entirely deleted when completed or being removed from the list
     $(this).remove(); //therefore it is of paramount importance to make use of the remove method , however the remove method if placed directly after the fadeout().remove(), does not give the elemennt enough time to fade out instead the process is rushed , hnce fading is close to not visible, therefore this is the reason why we have to encase the remove() inside a callback function to ensure that after a complete fade the Li is eventually deleted! 
 });
 event.stopPropagation();
});

//----------------------------------------------------------------------------------
//           adding text to the list and clearing input field 
//----------------------------------------------------------------------------------
$('input[type="text"').keypress(function(evt){
    if(evt.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $('ul').append("<li><span>X</span>  " + todoText + "</li>")
    }
});
//-------------- testing! how to stop propagation to mother elements when the span is clicked------------------------------
// $('ul').click(function(){
//     alert('clicked on the ul');
// });

// $('#container').click(function(){
//     alert('clicked on the container div');
// });
// $('body').click(function(){
//     alert('clicked on the body');
// });

//-----------------------------------------------------------------------------------
//            toggling input field between collapse and show
//-----------------------------------------------------------------------------------
//fade in and out the input field
$('.fa-plus').click(function(){
    $('input[type="text"').fadeToggle();
});