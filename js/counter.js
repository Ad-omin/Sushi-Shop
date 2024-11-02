
window.addEventListener('click', function(event){

    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // Find counter wrapper
        const counterWrapper = event.target.closest('.counter-wrapper');
        // Find div with counter number
        counter = counterWrapper.querySelector('[data-counter]');
    
    }

    // Check whether the element is plus or minus. //

    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;

    }

    if (event.target.dataset.action === 'minus') {
        
        if ( parseInt(counter.innerText) > 1 ) {
            counter.innerText = --counter.innerText;
        
        // Check whether an item in the basket
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ) {
            event.target.closest('.cart-item').remove();

            toggleCartStatus();
            calcCartPriceAndDelivery();
        }
    
    }

    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery();
    }


});