document.querySelector('.toggle-btn').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('open-menu');
});
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.first-link');

    function updateActiveLinks() {
        var activeLinkId = localStorage.getItem('activeLink');
        if (activeLinkId) {
            document.querySelectorAll('.first-link').forEach(function(link) {
                if (link.id === activeLinkId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    }

    updateActiveLinks();

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            var linkId = link.id;
            if (link.classList.contains('active')) {
                link.classList.remove('active');
                if (localStorage.getItem('activeLink') === linkId) {
                    localStorage.removeItem('activeLink');
                }
            } else {
                link.classList.add('active');
                localStorage.setItem('activeLink', linkId);
            }
        });
    });
});
