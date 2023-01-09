import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import App from "./App";
import Counter from "./counter/counter";
import DynamicForm from "./dynamicForm/dynamicForm";
import MoviesList from "./Hooks/apiCall";
import LifeCycleClass from "./Hooks/lifeCycle";
import Day11App from "./Hooks/UseEffect/cleanUp2";
import ParentComponent from "./memo/parentComponent";
import ParentTodo from "./To-Do/ComponentTodo/parentTodo";
import Project1 from "./To-Do/enterDataProject/enterDataProject";
import DebounceSrcatch from "./useCallBack/useCallBack";
import { UCBParentComponent } from "./useCallBack/useCallBackEg";
import LoopUpToMemo from "./useMemo/example1";
import { Parent } from "./treeTrial/Parent";
import HomePage from "./Jan3/gitHubProfiler/page1";
import RepoDisplay from "./Jan3/gitHubProfiler/repoDisplay";
import RepoDescription from "./Jan3/gitHubProfiler/page2";
import FollowerDisplay from "./Jan3/gitHubProfiler/followerDisplay";
import Home from "./Jan3/routing/home";
import About from "./Jan3/routing/about";
import Error from "./Jan3/routing/error";
import Logup from "./simpleForm/simpleform";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "repos/:name",
    caseSensitive:true,
    element: <RepoDisplay />,
  },
  {
    path: "repositorydetail/:name/:reponame",
    caseSensitive:true,
    element: <RepoDescription />,
  },
  {
    path: "followers/:name",
    caseSensitive:true,
    element: <FollowerDisplay />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <Counter/> */}
    {/* <Form/> */}
    {/* <ParentTodo/> */}
    {/* <LifeCycleClass/> */}
    {/* <MoviesList/> */}
    {/* <UEWD/> */}
    {/* <DebounceSrcatch/> */}
    {/* <Project1/> */}
    {/* <Day11App/> */}
    {/* <Parent/> */}
    {/* <ParentComponent/> */}
    {/* <LoopUpToMemo/> */}
    {/* <UseEffectProductFilter/> */}
    {/* <UseMemoProductFilter/> */}
    {/* <UCBParentComponent/> */}
    {/* <DynamicForm/> */}
    {/* <HomePage/> */}
    <Logup/>

    {/* <BrowserRouter>
<Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/repository" element={<RepoDescription />} />
    <Route path="/followers" element={<FollowerDisplay/>}/>
</Routes>
</BrowserRouter> */}

    {/* <RouterProvider router={router} /> */}
  </>
);
