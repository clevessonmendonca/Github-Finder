import { Outlet } from "react-router-dom";

import classes from './styles/App.module.css'

export function App() {
  return (
    <div className={classes.app}>
      <h1>Github Finder</h1>
      <Outlet />
    </div>
  )
}