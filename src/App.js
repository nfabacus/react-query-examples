import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {QueryCache, QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Users from "./pages/Users";

const queryClient = new QueryClient({
  options: {
    queryCache: QueryCache
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="d-flex vh-100">
          <SideNav />
          <div className="p-5">
            <Switch>
              <Route path="/posts">
                <Posts />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
