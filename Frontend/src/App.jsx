import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './HomePage.jsx';
function App(){
return (createRoot(document.getElementById('root')).render(
   <HomePage/>
));
}
export default App;
