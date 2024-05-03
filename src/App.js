import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AllRoutes } from "./routes/AllRoutes";
import PrivateRoute from "./routes/PrivateRoutes";
import PublicRoute from "./routes/PublicRoutes";
import PageNotFound from "./routes/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        {AllRoutes.map((route) => {
          return (
            <Route
              key={route.name}
              path={route.path}
              element={
                !route.isPublic ? (
                  <PrivateRoute children={route.component}/>
                ) : (
                  <PublicRoute children={route.component}/>
                )
              }
            />
          );
        })}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router> 
  );
}

export default App;
