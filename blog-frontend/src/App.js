import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import BlogForm from './components/BlogForm';
import Header from './components/Header';
import EditForm from './components/EditForm';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/posts/:id" element={<BlogDetail />} />
        <Route path="/new" element={<BlogForm />} />
        <Route path="/edit" element={<EditForm />} />
      </Routes>

    </Router>
  );
}

export default App;
