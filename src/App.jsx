import { Outlet } from 'react-router-dom';
import './App.css';

// navegação
import Navbar from './components/Navbar.jsx';
import { useStore } from './context/store';
import Login from './pages/LoginPage';

function App() {  
  const [store] = useStore()
    
  return store.token ? (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  ) : <Login />;// Se estiver logado retorna a aplicação, senão retorna a página de login
}

export default App;
