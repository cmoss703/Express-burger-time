// Create button functions here
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    const addBtn = document.getElementById('create-form');
    const eatBtn = document.querySelectorAll('.eat-btn');

    if (addBtn) {
        addBtn.addEventListener('submit', (e) => {
            console.log('hi');
            e.preventDefault();

            const newBurger = {
                burger_name: document.getElementById('berg').value.trim(),
            }

            console.log(newBurger);

            fetch('/api/burgers', {
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
    }

    if (eatBtn) {
        eatBtn.forEach((button) => {
            button.addEventListener('click', (e) => {
                console.log('eat test');

                const id = e.target.getAttribute('data-id');
                // const newEat = e.target.getAttribute('data-devoured');

                console.log("id: " + id);

                const devouredState = {
                    devoured: true,
                }
                
                console.log(devouredState);

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application-json',
                    },

                    // body: devouredState,
                    body: JSON.stringify(devouredState),
                }).then((response) => {

                    console.log(e.target)

                    if (response.ok) {
                        console.log(`changed devoured state to: true`);
                        location.reload('/');

                    } else {
                        alert('Something went wrong!');
                    }
                })


            })
        })
    }

})