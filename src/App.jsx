import Home from "./ui/pages/homePage/Home.jsx";
import '../src/App.css'
import PrivateRoute from "./privateRoute.jsx";
const App = () => {
  return (
    <div>
      {/* <HomePage /> */}
      <PrivateRoute />
      {/* <Home/> */}
    </div>
  )
}

export default App