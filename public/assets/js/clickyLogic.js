$(document).ready(function(){
    
    $('#createNewBurgerButton').on('click', function(){
        var thisBurger = $('#newBurger').val();

        var thisBurgerObject = {
            burgerName: thisBurger
        }
        if (thisBurger === "" || thisBurger === null) {
            $('#alertModal').toggle()
            return false;
        }
        $.post('/api/burger', thisBurgerObject)
        .then(function(){
            location.reload();
        });
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

    $('#updateThisBurgerButton').on('click', function(){
        var thisBurgerId = $(this).attr('burgerid');
        var newBurgerName = $('#newBurgerName').val();
        console.log(`ID: ${thisBurgerId} - new name: ${newBurgerName}`);
    });
});