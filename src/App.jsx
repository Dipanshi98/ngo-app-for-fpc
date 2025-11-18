
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Programs from './pages/Programs/Programs.jsx';
import Donate from './pages/Donate/Donate.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Impact from './pages/Impact/Impact.jsx';
import Team from './pages/Team/Team.jsx';
import Blog from './pages/Blog/Blog.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="donate" element={<Donate />} />
          <Route path="contact" element={<Contact />} />
          <Route path="impact" element={<Impact />} />
          <Route path="team" element={<Team />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
