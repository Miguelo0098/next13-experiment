import Movie from "./Movie";

export default async function Home() {
  const APIUrl = "https://api.themoviedb.org/3/movie/popular";

  const data = await fetch(`${APIUrl}?api_key=${process.env.API_KEY}`);
  const res = await data.json();

  return (
    <main>
      <section className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </section>
    </main>
  );
}
