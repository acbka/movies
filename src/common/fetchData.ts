type FetchDataPropsType = {
  page: number;
};

export const fetchData = async ({ page }: FetchDataPropsType) => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=dd4bd51f8d6385246bd537b189c291ab&page=" +
    page;
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDRiZDUxZjhkNjM4NTI0NmJkNTM3YjE4OWMyOTFhYiIsInN1YiI6IjYxMmM0MmM3NTA3MzNjMDAyYTcwYzg4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1IZrZUb5A2TL-UN-geqsFjqYXGjO87xbXLVIRFQf1Ts";
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

   const json = await response.json();
  return json;
};
