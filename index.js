var price, toppingsPrice;
let total = 0;
function getPizza(flavour,size,toppings,crust,total){
    this.flavour = flavour;
    this.size = size;
    this.toppings = toppings;
    this.crust = crust
    this.total = total;

};
$(document).ready(function() {
    $('.col-lg-4').hover(function(){
        $(this).find('.overlay').toggle();
    })
    $('.submit-button').click(function(event){
        let pflavour = $('#pflavour option:selected').val();
        let pSize = $('#size option:selected').val();
        let ptoppings = $('#toppings option:selected').val();
        let pCrust = $('#crust option:selected').val();

        switch(pSize){
            case "0":
            price = 0;
            break;
            
            
            case 'large':
            price = 1000;
            console.log(price);
            break;


            case 'medium':
            price = 800;
            console.log(price);
            break;

            
            case 'regular':
            price = 500;
            console.log(price);
            break;



        }

        switch(ptoppings){
            case "O":
                price = 0;
            break;

            case "yes":
                price = 50;
                console.log(price)
            break;

            case "no":
                price = 50;
                console.log(price)
            break;

        }

        switch(ptoppings){
            case "O":
                price = 0;
            break;

            case "yes":
                price = 50;
                console.log(price)
            break;

            case "no":
                price = 50;
                console.log(price)
            break;

        }
        if ((pSize == "0") && (ptoppings == "0")){
            console.log('nothing selected');
            $(button.submit-button).show();
            
            $(div.orders).hide();
            alert('select pizza size and toppings')


        }

        else {
            $(button.submit-button).hide();
            
            $(div.orders).show();
        }



        event.preventDefault();



    });
    
    
})

    
   
