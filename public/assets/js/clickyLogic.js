$(document).ready(function(){
    
    $('#createNewBurgerButton').on('click', function(){
        var thisBurger = $('#newBurger').val();

        console.log(`burger: ${thisBurger}`);
        var thisBurgerObject = {
            burgerName: thisBurger
        }
        // $.post('/api/post', thisBurger);
        $.ajax({
            type: "POST",
            url: '/api/burger',
            data: thisBurgerObject,
            success: console.log('success')
            // dataType: dataType
          });
    });






});