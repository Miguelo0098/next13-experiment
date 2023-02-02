import Image from "next/image";
import Link from "next/link";

export default function Movie({ title, id, release_date, poster_path }) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <h2>{title}</h2>
      <h3>{release_date}</h3>
      <Link href={`/${id}`}>
        <Image src={imagePath + poster_path} width={300} height={300} alt="" />
      </Link>
    </div>
  );
}
