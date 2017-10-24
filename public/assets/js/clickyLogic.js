$(document).ready(function(){
    
    $('#createNewBurgerButton').on('click', function(){
        var thisBurger = $('#newBurger').val();
        var thisBurgerObject = {
            burgerName: thisBurger
        }
        $.post('/api/burger', thisBurgerObject);
        // $.ajax({
        //     type: "POST",
        //     url: '/api/burger',
        //     data: thisBurgerObject,
        //     success: console.log('success')
        //   });
    });

    $('.deleteBurger').on('click', function(){
        var thisBurgerId = $(this).attr('burgerid');
        console.log(thisBurgerId);
    });

    $('.updateBurger').on('click', function(){
        var thisBurgerId = $(this).attr('burgerid');
        console.log(thisBurgerId);
    });

    $('.eatBurger').on('click', function(){
        var thisBurgerId = $(this).attr('burgerid');
        console.log(thisBurgerId);
    });

    $('.makeAnotherBurger').on('click', function(){
        var thisBurgerId = $(this).attr('burgerid');
        console.log(thisBurgerId);
    });



});