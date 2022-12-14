import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import PostsPage from './pages/PostsPage';
import Contact from './pages/Contact';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    // FullBody

    <Router>
      <div className='mx-auto min-h-screen flex flex-col gap-2 md:gap-6 bg-background font-sans-pro'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/' element={<PostsPage />} />
            <Route path='post/:id' element={'Single Post'} />
            <Route path='/contact' element={<Contact />} />
            <Route
              path='/register'
              element={
                <ProtectedRoute>
                  <Register />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
