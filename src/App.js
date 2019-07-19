import React from 'react';
import './App.css';
import BlogComponent from "./components/blog-page"
import { Router , Route} from "react-router-dom";
import History from './history';
import PostPage from "./components/post-page"
import HomePage from "./components/home-page"
import Projects from "./components/projects"
import About from "./components/about"

function App() {



  return (
    <div className="App">
        <Router  history={History}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/blog" component={BlogComponent} />
            <Route exact path="/blog/:id" component={PostPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
           
          </Router>
    </div>
  );
}

export default App;
