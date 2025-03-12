import { useQuery } from "@tanstack/react-query";
import mockData from "../mock-data.json";

async function getRepositories() {
  return mockData;
  //   const response = await fetch(
  //     "https://api.github.com/search/repositories?q=nextjs"
  //   );
  //   const data = await response.json();
  //   return data;
}

const GithubRepositorySearch = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repository-search"],
    queryFn: getRepositories,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <ol>
      {data?.items.map((repo: { name: string }) => (
        <li>{repo.name}</li>
      ))}
    </ol>
  );
};

export default GithubRepositorySearch;
