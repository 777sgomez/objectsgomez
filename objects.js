const ol = document.querySelector("ol");
const movies = [
    {
        name: "Twilight",
        year: 2008,
        director: "Chris Weitz",
        picture: "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_.jpg",
    },
    {
        name: "Jennifer's Body",
        year: 2009,
        director: "Karyn Kusama",
        picture: "https://lumiere-a.akamaihd.net/v1/images/image_22a64aa3.jpeg?region=0%2C0%2C1400%2C2100",
    },
    {
        name: "Keanu",
        year: 2016,
        director: "Peter Antencio",
        picture: "https://m.media-amazon.com/images/M/MV5BMjBlOTIxNGMtMDAwOS00OTFjLWJkNWEtMDg5NGU0NzE5ZWRhXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_",
    }
];

const template = movies.map(movie => `
<li>
    <p> Name: ${movie.name}</p>
    <p> Year: ${movie.year}</p>
    <p> Director: ${movie.director}</p>
    <img src="${movie.picture}" height="400">
</li>
`);
ol.innerHTML = template.join('');