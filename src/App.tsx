import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GithubRepositorySearch from "./components/GithubRepositorySearch";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GithubRepositorySearch />
    </QueryClientProvider>
  );
}

export default App;
