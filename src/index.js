import ReactDOM from 'react-dom/client';
import { List } from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return(
    <div className='container'>
      <nav className='navbar navbar-light bg-dark sticky-top'>
        <h1 className='nabvar-brand text-light'>Rick and Morty</h1>
      </nav>
      <List />
    </div>
  );
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);