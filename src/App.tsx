import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home.tsx";
import NavBar from "./components/NavBar.tsx";

const App = () => {

  const routes = [
    {path: '/', component: Home}
  ]

  return (
    <div className={'bg-background-light dark:bg-background-dark h-screen w-screen'}>
      <NavBar />
      <div className={'scroll-auto overflow-y-auto mb-auto p-8 text-background-dark dark:text-background-light'}>
        body
      </div>
    </div>
  )
}

export default App
