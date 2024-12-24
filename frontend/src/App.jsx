import { Outlet } from "react-router-dom";

function App() {
  

  return (
    <>
      <nav>Navbar</nav>
       <main className="min-h-screen">
       <Outlet/> 
       </main>     {/*outlet used to the rendered the children */}
      <footer>Footer</footer>
    </>
  )
}

export default App
