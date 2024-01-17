import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Header from './components/Header';
import ArtistPage from './pages/ArtistPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from './pages/SearchResults';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home page="Homepage"/>} />
          <Route path="/artist/:artistId" element={<ArtistPage />} />
          <Route path="/risultati" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
