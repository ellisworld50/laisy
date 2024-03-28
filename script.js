document.addEventListener("DOMContentLoaded", function() {
    const artistList = document.querySelector('.artist-list');
    
    // Sample artist data
    const artists = [
        { name: 'Adele', imageUrl: 'images/adel.jpg', link: '#' },
        { name: 'Aespa', imageUrl: 'images/aespa.jpg', link: '#' },
        { name: 'Amaarae', imageUrl: 'images/amaarae.jpg', link: '#' },
        { name: 'Ann Marie', imageUrl: 'images/ann_marie.jpg', link: '#' },
        { name: 'Arctic Monkeys', imageUrl: 'images/arctic_monkeys.jpg', link: '#' },
        { name: 'Asake', imageUrl: 'images/asake.jpg', link: '#' },
        { name: 'Avenoir', imageUrl: 'images/avenoir.jpg', link: '#' }
        // Add more artist data here
    ];

    // Sort artists by name in ascending order
    artists.sort((a, b) => a.name.localeCompare(b.name));

    // Populate artist list
    artists.forEach(artist => {
        const listItem = document.createElement('li');
        listItem.classList.add('artist');

        const artistLink = document.createElement('a');
        artistLink.href = artist.link;

        const artistImage = document.createElement('img');
        artistImage.src = artist.imageUrl;
        artistImage.alt = artist.name;

        const artistName = document.createElement('span');
        artistName.classList.add('artist-name');
        artistName.textContent = artist.name;

        artistLink.appendChild(artistImage);
        artistLink.appendChild(artistName);

        listItem.appendChild(artistLink);
        artistList.appendChild(listItem);
    });
});
