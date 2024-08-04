document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropbtn');

    dropdowns.forEach(dropbtn => {
        dropbtn.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('show');
        });
    });

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    };
});


