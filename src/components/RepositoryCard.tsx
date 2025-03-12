import dayjs from "dayjs";

type GithubRepository = {
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
};

// e.g. "2025-03-08T02:32:22Z"
const formatDate = (date: string) => {
  return dayjs(date).format("D MMM YYYY");
};

const RepositoryCard: React.FC<{ repo: GithubRepository }> = ({ repo }) => {
  console.log(repo);
  return (
    <div className="border border-gray-300 p-4 my-3 rounded">
      <a
        href={repo.html_url}
        className="text-blue-600 hover:underline text-lg mb-3"
      >
        {repo.full_name}
      </a>
      <p>{repo.description}</p>
      <div className="mt-2">
        {repo.topics.map((topic: string) => (
          <span className="bg-blue-100 mr-1 rounded text-blue-700 p-1 text-xs leading-7">
            {topic}
          </span>
        ))}
      </div>
      <div className="text-gray-500 text-xs flex gap-2 mt-2">
        <span>{repo.stargazers_count} stars</span>
        <span>·</span>
        <span>Updated on {formatDate(repo.updated_at)}</span>
      </div>
    </div>
  );
};

export default RepositoryCard;
