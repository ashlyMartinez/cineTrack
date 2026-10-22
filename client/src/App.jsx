import { useState } from 'react'
import LandingPage from './pages/landing/LandingPage';
import './App.css'
import SignIn from './pages/signIn/SignIn';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Movie from './pages/movie/Movie'

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    // Need to update this to sign in Page when backend is set up 
    <Route path="/">
      <Route index element = {<LandingPage />}/>
      <Route path = "movie/:movieId" element = {<Movie />}/>

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
