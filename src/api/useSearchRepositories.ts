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

export type RespositorySearchResult = {
  total_count: number;
  incomplete_results: boolean;
  items: GithubRepository[];
};

type SearchRepositoriesParams = {
  searchQuery: string;
  page: number;
  perPage: number;
};

async function getRepositories(params: SearchRepositoriesParams) {
  //   return mockData;
  const urlParams = new URLSearchParams({
    q: params.searchQuery,
    page: params.page.toString(),
    per_page: params.perPage.toString(),
  });
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${urlParams}`
  );
  const data = await response.json();
  return data;
}

function useSearchRepositories(params: SearchRepositoriesParams) {
  return useQuery<RespositorySearchResult>({
    queryKey: ["repository-search", params],
    queryFn: () => getRepositories(params),
    enabled: params.searchQuery !== "",
    initialData: { items: [], total_count: 0, incomplete_results: false },
  });
}

export { useSearchRepositories };
