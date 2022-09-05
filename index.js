const express = require("express");
const morgan = require("morgan");
const app = express();

const topMovies = [
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    year: 2004,
    genre: "Fantasy",
    description:
      "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.",
    director: "Alfonso Cuarón",
    image: "#",
  },
  {
    title: "Titanic",
    year: 1997,
    genre: "Drama",
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    director: "James Cameron",
    image: "#",
  },
  {
    title: "The Little Mermaid",
    year: 1989,
    genre: "Animation",
    description:
      "A mermaid princess makes a Faustian bargain in an attempt to become human and win a prince's love.",
    director: "Ron Clements, John Musker",
    image: "#",
  },
  {
    title: "Thor: Ragnarok",
    year: 2017,
    genre: "Action, Comedy",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Taika Waititi",
    image: "#",
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    description:
      "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.",
    director: "Frank Darabont",
    image: "#",
  },
];

const directors = [
  {
    name: "Alfonso Cuarón",
    bio: "Alfonso Cuarón Orozco was born on November 28th in Mexico City, Mexico.",
    birthYear: 1961,
    deathYear: "N/A",
  },
  {
    name: "James Cameron",
    bio: "James Francis Cameron was born on August 16, 1954 in Kapuskasing, Ontario, Canada.",
    birthYear: 1954,
    deathYear: "N/A",
  },
  {
    name: "Ron Clements",
    bio: "Ron Clements was born on April 25, 1953 in Sioux City, Iowa, USA.",
    birthYear: 1953,
    deathYear: "N/A",
  },
  {
    name: "John Musker",
    bio: "John Musker was born on November 8, 1953 in Chicago, Illinois, USA.",
    birthYear: 1953,
    deathYear: "N/A",
  },
  {
    name: "Taika Waititi",
    bio: "Taika Waititi, also known as Taika Cohen, hails from the Raukokore region of the East Coast of New Zealand, and is the son of Robin (Cohen), a teacher, and Taika Waititi, an artist and farmer.",
    birthYear: 1975,
    deathYear: "N/A",
  },
  {
    name: "Frank Darabont",
    bio: "Three-time Oscar nominee Frank Darabont was born in a refugee camp in 1959 in Montbeliard, France, the son of Hungarian parents who had fled Budapest during the failed 1956 Hungarian revolution.",
    birthYear: 1959,
    deathYear: "N/A",
  },
];

app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("Welcome to Movies API!");
});

// List all movies
app.get("/movies", (req, res) => {
  res.status(200).json(topMovies);
});

// Get a single movie by title
app.get("/movies/:title", (req, res) => {
  const { title } = req.params;
  const movie = topMovies.find((movie) => movie.title === title);
  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(400);
  }
});

app.post("/movies", (req, res) => {
  res.send("Add a movie to the list.");
});

app.delete("/movies", (req, res) => {
  res.send("Delete a movie from the list.");
});

app.get("/genres/:genre", (req, res) => {
  res.send("Movie genre.");
});

app.get("/directors/", (req, res) => {
  res.status(200).json(directors);
});

app.get("/directors/:director", (req, res) => {
  const { director } = req.params;
  const foundDirector = directors.find((person) =>
    person.name.includes(director)
  );
  if (foundDirector) {
    res.status(200).json(foundDirector);
  } else {
    res.status(400);
  }
});

app.post("/users", (req, res) => {
  res.send("New user added.");
});

app.put("/users/:username", (req, res) => {
  res.send("Username updated.");
});

app.delete("/users/:username", (req, res) => {
  res.send("User deleted.");
});

app.get("/documentation", (req, res) => {
  res.sendFile("public/documentation.html", { root: __dirname });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
