import './App.scss'
import { Header } from './shared/components/AppLayout/Header';
import { Footer } from './shared/components/AppLayout/Footer';
import { Home } from './pages/Home';


function App() {

  return (
    <div style={{ paddingTop: '100px' }}>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
