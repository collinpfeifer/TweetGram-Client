import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MenuBar from './MenuBar';
import Container from '@material-ui/core/Container';
import { AuthProvider } from '../context';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SinglePost from '../pages/SinglePost';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <CssBaseline />
        <Container maxWidth='xl'>
          <MenuBar />
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/register' element={<Register/>} />
            <Route exact path='/posts/:postId' element={<SinglePost/>} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
};

export default App;
