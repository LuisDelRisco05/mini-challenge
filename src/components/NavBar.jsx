import { Link } from "react-router-dom";


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div>
            <Link to='/' underline="none">
                <button className="btn text-white">Employees</button>
            </Link>
            <Link to='form' underline="none">
                <button className="btn text-white">Form</button>
            </Link>
        </div>
    </nav>
  )
}
