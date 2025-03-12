import { useQuery } from "@tanstack/react-query";
import mockData from "../mock-data.json";
import RepositoryCard from "./RepositoryCard";

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
    <div className="mx-auto max-w-2xl">
      <h2 className="text-3xl my-5 font-bold">Github Repository Search</h2>
      {data?.items.map((repo) => (
        <RepositoryCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default GithubRepositorySearch;
