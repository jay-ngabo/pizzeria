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
        let pcrust = $('#crust option:selected').val();

        switch(pSize){
            case "0":
            sprice = 0;
            break;
            
            
            case 'large':
            sprice = 1000;
            console.log(sprice);
            break;


            case 'medium':
            sprice = 700;
            console.log(sprice);
            break;

            
            case 'regular':
            sprice = 500;
            console.log(sprice);
            break;
            default:
                console.log('error');



        }

        switch(ptoppings){
            case "O":
                tprice = 0;
            break;

            case "yes":
                tprice = 50;
                console.log(tprice)
            break;

            case "no":
                tprice = 0;
                console.log(tprice)
            break;
            default:
                console.log('error');

        }
        switch(pcrust){
            case "O":
                cprice = 0;
            break;

            case "thick":
                cprice = 0;
                console.log(tprice)
            break;

            case "thin":
                cprice = 0;
                console.log(cprice)
            break;
            default:
                console.log('error');

        }

     
        if ((pSize == "0") && (ptoppings == "0")){
            console.log('nothing selected');
            $(button.submit-button).show();
            
            $(div.orders).hide();
            alert('select pizza size and toppings')


        }

        else {
            $(button.submit-button).hide();
            
            // $(.orders).show();

        }
        total = sprice + tprice + cprice;
        console.log(total);
        
        let checkOutTotal = 0;
        $('#size').html($('#pSize option: selected').val());

        $('#flavour').html($('#pflavour option: selected').val());

        $('#toppings').html($('#ptoppings option: selected').val());

        $('#crust').html($('#pcrust option: selected').val());

        $('#order-total').html(total);

        $('.add-pizza').click(function(event){

            let pflavour = $('#pflavour option: selected').val();
            let pSize = $('#pSize option: selected').val();
            let ptoppings = $('#ptoppings option: selected').val();
            let pcrust = $('#pcrust option: selected').val();


            switch(pSize){
                case "0":
                sprice = 0;
                break;
                
                
                case 'large':
                sprice = 1000;
                console.log(sprice);
                break;
    
    
                case 'medium':
                sprice = 700;
                console.log(sprice);
                break;
    
                
                case 'regular':
                sprice = 500;
                console.log(sprice);
                break;
                default:
                    console.log('error');
    
    
    
            }
    
            switch(ptoppings){
                case "O":
                    tprice = 0;
                break;
    
                case "yes":
                    tprice = 50;
                    console.log(tprice)
                break;
    
                case "no":
                    tprice = 0;
                    console.log(tprice)
                break;
                default:
                    console.log('error');
    
            }
            switch(pcrust){
                case "O":
                    cprice = 0;
                break;
    
                case "thick":
                    cprice = 0;
                    console.log(tprice)
                break;
    
                case "thin":
                    cprice = 0;
                    console.log(cprice)
                break;
                default:
                    console.log('error');
    
            }
            checkOutTotal = checkOutTotal + total;
            console.log(checkOutTotal);

            var newOrder = new getPizza(size,topping,flavour,crust,total);
            $('#orders-made').append('<tr><td> id="pflavour">' + newOrder.flavour + '</td><td> id="pSize">' + newOrder.size + '</td><td id="pcrust">'+newOrder.crust + '</td><td id="ptoppings">'+newOrder.toppings+'</td><td id="order-total">'+newOrder.total+'</td></tr>');
            console.log(newOrder);

            event.preventDefault();

        })


     
     
     




        event.preventDefault();



    });
    
    
})

    
   
