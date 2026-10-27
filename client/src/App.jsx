import { useState } from 'react'
import './App.css'

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

import LandingPage from './pages/landing/LandingPage';
import SignInPage from './pages/signIn/SignInPage';
import MoviePage from './pages/movie/MoviePage';
import ListPage from './pages/list/ListPage';
import SearchPage from './pages/search/SearchPage';

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    // Need to update this to sign in Page when backend is set up 
    <Route path="/">
      <Route index element = {<LandingPage />}/>
      <Route path = "list" element={<ListPage />}/>
      <Route path = "movie/:movieId" element = {<MoviePage />}/>
      <Route path = "search" element={<SearchPage />}/>
      <Route path = "signin" element ={<SignInPage />}/>
    </Route>
  )
)

function App() {
  

  return (
    
    <div class = "appContainer">
      <RouterProvider router={appRouter}/>

    </div>
      
    
  )
}

export default App
