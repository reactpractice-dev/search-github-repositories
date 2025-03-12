import { useQuery } from "@tanstack/react-query";
// import mockData from "../mock-data.json";

export type GithubRepository = {
  id: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
};

async function getRepositories(searchQuery: string) {
  //   return mockData;
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${searchQuery}`
  );
  const data = await response.json();
  return data;
}

function useSearchRepositories(searchQuery: string) {
  return useQuery<{ items: GithubRepository[] }>({
    queryKey: ["repository-search", searchQuery],
    queryFn: () => getRepositories(searchQuery),
    enabled: searchQuery !== "",
    initialData: { items: [] },
  });
}

export { useSearchRepositories };
