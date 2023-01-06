import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route, Router } from "react-router-dom";
import "./App.css";
import App from './App'
import Counter from './counter/counter'
import DynamicForm from './dynamicForm/dynamicForm'
import MoviesList from './Hooks/apiCall'
import LifeCycleClass from './Hooks/lifeCycle'
import Day11App from './Hooks/UseEffect/cleanUp2'
import ParentComponent from './memo/parentComponent'
import ParentTodo from './To-Do/ComponentTodo/parentTodo'
import Project1 from './To-Do/enterDataProject/enterDataProject'
import DebounceSrcatch from './useCallBack/useCallBack'
import { UCBParentComponent } from './useCallBack/useCallBackEg'
import LoopUpToMemo from './useMemo/example1'
// import { UseMemoProductFilter } from './useMemo/ProductFilter/useMemoFilter'
import { Parent } from './treeTrial/Parent'
import HomePage from './Jan3/gitHubProfiler/page1'
import RepoDescription from './Jan3/gitHubProfiler/page2';
import FollowerDisplay from './Jan3/gitHubProfiler/followerDisplay';

ReactDOM.createRoot(document.getElementById('root')).render(
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

<BrowserRouter>
<Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/page2" element={<RepoDescription />} />
    <Route path="/followers" element={<FollowerDisplay/>}/>
</Routes>
</BrowserRouter>


 </>
)
