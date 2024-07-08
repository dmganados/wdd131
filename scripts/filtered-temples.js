document.addEventListener('DOMContentLoaded', function() {
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Cebu Philippines",
            location: "Cebu, Philippines",
            dedicated: "2010, June, 13",
            area: 29556,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/1b2c438fbf03dce153643292f31889fcc54dd95a/full/320%2C/0/default"
        },
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/7210c09be95c4474772ae52e5f31c23c08112784/full/320%2C/0/default"
        },
        {
            templeName: "Manila Philippines",
            location: "Manila, Philippines",
            dedicated: "1984, September, 25",
            area: 22500,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/cf62ebb59aefa1d2856981fb77574fb9982c5fad/full/320%2C/0/default"
        },
        {
            templeName: "Concepción Chile",
            location: "Concepción, Chile",
            dedicated: "2018, October, 28",
            area: 23095,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/7873102ba98c0c2b6f45ca655d737cf5a5e7f7c2/full/320%2C/0/default"
        },
        {
            templeName: "Hague Netherlands",
            location: "Zoetermeer, Netherlands",
            dedicated: "2002, September, 8",
            area: 14477,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/3aedbae4240b4c09f5286429c9e6303f530a665d/full/320%2C/0/default"
        }
      ];

    //   funtions to generate temple cards
      function generateTempleCards(filter) {
        const gallery = document.getElementById('temple-gallery');
        gallery.innerHTML = '';
    
        const filteredTemples = temples.filter(temple => {
            if (filter === 'old') return new Date(temple.dedicated).getFullYear() < 1900;
            if (filter === 'new') return new Date(temple.dedicated).getFullYear() > 2000;
            if (filter === 'large') return temple.area > 90000;
            if (filter === 'small') return temple.area < 10000;
            return true
        })

        filteredTemples.forEach(temple => {
            const figure = document.createElement('figure');
            const img = document.createElement('img');

            img.src = temple.imageUrl;
            img.alt = temple.templeName;
            img.loading = 'lazy';
            img.width = 300;
            img.height = 200;

            const figcaption = document.createElement('figcaption');
            figcaption.innerHTML = `
                <strong>${temple.templeName}</strong><br>
                Location: ${temple.location}<br>
                Dedicated: ${temple.dedicated}<br>
                Area: ${temple.area} sq ft
                `;
            
            figure.appendChild(img);
            figure.appendChild(figcaption);
            gallery.appendChild(figure);
        });    

        // Page header (h2) will change according to the navigation selected
        const mainHeading = document.querySelector('main h2');
        mainHeading.textContent = filter.charAt(0).toUpperCase() + filter.slice(1);
    }

    // Filter event listener
    document.getElementById('nav-menu').addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const filter = event.target.getAttribute('data-filter');
            generateTempleCards(filter);
        }
    });

    generateTempleCards('home');

    // Update the footer with the current year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Update the footer with the last modified date
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;

    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('show');
        hamburger.textContent = hamburger.textContent === '✖' ? '☰' : '✖';
    });    
  });








