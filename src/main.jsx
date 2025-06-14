import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx'
import FitnessExercises from './pages/FitnessExercises.jsx';
import HealthCare from './pages/HealthCare.jsx'
import Layout from './components/Layout/index.jsx';
import OneMonthPlan from './components/FitnessPlans/OneMonthPlan/index.jsx';
import OneWeekPlan from './components/FitnessPlans/OneWeekPlan/index.jsx';
import ExercisePanelOfOneMonth from './components/FitnessPlans/ExercisePanelOfOneMonth/index.jsx';
import ExercisePanelOfOneWeek from './components/FitnessPlans/ExercisePanelOfOneWeek/index.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='fitness-exercises' element={<FitnessExercises />} />
      <Route path='fitness-exercises/one-month-exercise-plan' element={<OneMonthPlan />} />
      <Route path='fitness-exercises/one-month-exercise-plan/:dayName' element={<ExercisePanelOfOneMonth />} />
      <Route path='fitness-exercises/one-week-exercise-plan' element={<OneWeekPlan />} />
      <Route path='fitness-exercises/one-week-exercise-plan/:dayName' element={<ExercisePanelOfOneWeek />} />
      <Route path='health-care' element={<HealthCare />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
