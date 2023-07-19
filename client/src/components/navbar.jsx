import { Link } from "react-router-dom"

export function Navbar () {
    return (
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/create-recipes">Create Recipes</Link>
        <Link to="/saved-recipes">Saved recipes</Link>
        <Link to="/auth">Register/Login</Link>
    </div>
    )
}