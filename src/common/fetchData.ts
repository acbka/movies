type FetchPropsType = {
  url: string;
};

export const fetchData = async ({ url }: FetchPropsType) => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDRiZDUxZjhkNjM4NTI0NmJkNTM3YjE4OWMyOTFhYiIsInN1YiI6IjYxMmM0MmM3NTA3MzNjMDAyYTcwYzg4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1IZrZUb5A2TL-UN-geqsFjqYXGjO87xbXLVIRFQf1Ts";
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return (await response.ok) ? response.json() : null;
};
