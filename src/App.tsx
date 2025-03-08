import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import HomePage from "./components/HomePage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
