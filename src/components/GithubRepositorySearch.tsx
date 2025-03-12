import { useSearchRepositories } from "../api/useSearchRepositories";
import RepositoryCard from "./RepositoryCard";
import { FormEvent, useState } from "react";

const GithubRepositorySearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isPending, error, data } = useSearchRepositories(searchQuery);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formValues = new FormData(e.currentTarget);
    setSearchQuery(formValues.get("searchQuery") as string);
  };

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="text-3xl my-5 font-bold">Github Repository Search</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="searchQuery"
          type="text"
          placeholder="Search repositories..."
          className="w-full p-2 border border-gray-300 rounded mb-3 bg-gray-100"
        />
      </form>
      {data?.items?.map((repo) => (
        <RepositoryCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default GithubRepositorySearch;
