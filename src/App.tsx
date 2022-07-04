import { UserContext } from "./contexts/UserContext"
import { User } from "./@consts/PostsAuthorAndContent"
import { Home } from "./pages/Home"

// import "./App.css"

function App() {
  return (
    <UserContext.Provider value={User}>
      <Home />
    </UserContext.Provider>
  )
}

export default App
