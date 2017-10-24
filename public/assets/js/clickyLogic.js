$(document).ready(function(){
    
    $('#createNewBurgerButton').on('click', function(){
        var thisBurger = $('#newBurger').val();
        var thisBurgerObject = {
            burgerName: thisBurger
        }
        $.post('/api/burger', thisBurgerObject)
        .then(function(){
            location.reload();
        })
        // $.ajax({
        //     type: "POST",
        //     url: '/api/burger',
        //     data: thisBurgerObject,
        //     success: console.log('success')
        //   });
    });

    $('.deleteBurger').on('click', function(){
        var thisBurgerId = $(this).attr('burgerid');
        
        $.ajax({
            type: "DELETE",
            url: `/api/burger/${thisBurgerId}`, 
            success: location.reload()
        });
    });

    $('.toggleEatBurger').on('click', function(){
        var thisBurgerId = $(this).attr('burgerid');
        var thisBurgerEaten = $(this).attr('burgereaten');
        console.log(`ID: ${thisBurgerId} - eaten: ${thisBurgerEaten}`);

        $.ajax({
            type: "PUT",
            url: `/api/burger/${thisBurgerId}/${thisBurgerEaten}`,
            success: location.reload()
        });
    });

    $('.updateBurger').on('click', function(){
        var thisBurgerId = $(this).attr('burgerid');
        console.log(thisBurgerId);
    });



});