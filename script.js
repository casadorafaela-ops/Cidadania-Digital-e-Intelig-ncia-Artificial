const counters = document.querySelectorAll('.number');

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        Number(counter.getAttribute('data-target'));

        const current =
        Number(counter.innerText);

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});
