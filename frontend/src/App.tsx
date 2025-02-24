import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import {Landing} from "./Pages/Landing"
import { ThemeProvider } from "./components/theme-provider";
import Signin from "./app/login/signin";
import Signup from "./app/login/signup";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProtectedRoute from "./app/ProtectedRouteLogic/Protected";
const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/signin" element={< Signin/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
    
  );
}

export default App;
