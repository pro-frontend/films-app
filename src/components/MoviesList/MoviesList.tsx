import React from "react";
import { WrapperLarge } from "../_StyledComponents";
import { MovieCard } from "./MovieCard";

const MoviesList = () => {
  const movies = [
    {
      id: 1,
      name: "Harry Potter",
      description: "movie about wizard",
      urlImage:
        "https://images-na.ssl-images-amazon.com/images/I/51rVowBOMeL._SY445_.jpg",
      date: "2001",
    },
    {
      id: 2,
      name: "1917",
      description: "movie about war",
      urlImage:
        "https://www.uphe.com/sites/default/files/styles/scale__344w_/public/2020/02/1917_PosterArt.jpg",
      date: "2009",
    },
    {
      id: 3,
      name: "Godfather",
      description: "movie about mafia",
      urlImage:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/classics-1566494388.jpg?crop=0.502xw:1.00xh;0.260xw,0&resize=640:*",
      date: "2002",
    },
    {
      id: 4,
      name: "Scary Movie",
      description: "comedy movie",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/en/2/29/Movie_poster_for_%22Scary_Movie%22.jpg",
      date: "2001",
    },
    {
      id: 5,
      name: "Superhero Movie",
      description: "comedy movie",
      urlImage:
        "https://m.media-amazon.com/images/M/MV5BMTc0Njc1MTU5Nl5BMl5BanBnXkFtZTcwMjA4NDE2MQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
      date: "2005",
    },
    {
      id: 6,
      name: "Yesterday",
      description: "romantic movie",
      urlImage:
        "https://www.uphe.com/sites/default/files/styles/scale__344w_/public/Yesterday_PosterArt_191329104590.png",
      date: "2009",
    },
  ];

  return (
    <WrapperLarge container spacing={6}>
      {movies.map(({ id, name, description, urlImage, date }) => (
        <MovieCard
          key={id}
          id={id}
          name={name}
          description={description}
          urlImage={urlImage}
          date={date}
        />
      ))}
    </WrapperLarge>
  );
};

export { MoviesList };
