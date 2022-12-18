const maturityValue = localStorage.getItem('maturity');
const loaderBlock = jQuery('#loaderApp');

 window.addEventListener("load", function(){


    if (maturityValue != 'true') {
        setTimeout(function() {
            jQuery('#loaderApp').fadeIn('slow').show();
        }, 3000)
    } else {


        jQuery('#loaderApp').fadeIn('slow').hide();
        console.log("Есть запись");
    }
    
    
    
    }
    
   
    );


    function checkMaturity() {
        //Save localStorage item as true

        console.log("Есть запись");
        localStorage.setItem('maturity', 'true');
        jQuery('#loaderApp').fadeIn('slow').hide();

    }