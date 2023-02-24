import HomePage from 'pages/home/Home'
import ListingPage from 'pages/listing/Listing'
import NotFoundPage from 'pages/not-found/NotFound'
import { Navigate } from 'react-router-dom'
import MainLayout from 'layouts/MainLayout'

const routes = () => [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'listing', element: <ListingPage /> },
      { path: '404', element: <NotFoundPage /> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ],
  },
]

export default routes
