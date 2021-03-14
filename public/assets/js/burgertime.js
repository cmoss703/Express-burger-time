// Create button functions here
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    const addBtn = document.getElementById('add-btn');
    const eatBtn = document.getElementById('eat-btn');

    addBtn.addEventListener('submit', (e) => {
        e.preventDefault();

        const newBurger = {
            burger_name: document.getElementById('berg').value.trim(),
        }

        fetch('api/burgers', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(newBurger),
        }).then(() => {
            document.getElementById('berg').value = '';

            console.log(`New burger ${newBurger.burger_name} ready to eat!`);
            location.reload();
        })
    });

    if (eatBtn) {
        eatBtn.forEach((button) => {
            button.addEventListener('click', (e) => {
                console.log('eat test');


            })
        })
    }

})