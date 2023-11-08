import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx'
import FitnessExercises from './pages/FitnessExercises.jsx';
import GetDiet from './pages/GetDiet.jsx'
import HealthCare from './pages/HealthCare.jsx'
import Layout from './components/Layout/index.jsx';
import Yoga from './pages/Yoga.jsx';
import OneMonthPlan from './components/FitnessPlans/OneMonthPlan/index.jsx';
import OneWeekPlan from './components/FitnessPlans/OneWeekPlan/index.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='fitness-exercises' element={<FitnessExercises />} >
        <Route path='one-month-exercise-plan' element={<OneMonthPlan />} />
        <Route path='one-week-exercise-plan' element={<OneWeekPlan />} />
      </Route>
      <Route path='health-care' element={<HealthCare />} />
      <Route path='yoga' element={<Yoga />} />
      <Route path='get-diet' element={<GetDiet />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
