import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import HomePage from "./components/HomePage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router";
import UsersPage from "./components/UsersPage";
import UserDetails from "./components/UserDetails";
import Form from "./components/Form";
function App() {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
