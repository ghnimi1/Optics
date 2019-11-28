import React, {Component} from 'react';
import HomeNav from './component/HomeNav';
import About from './component/About';
import Team from './component/Team';
import Portfolio from './component/Portfolio';
import Services from './component/Services';
import Contact from './component/Contact';
import Social from './component/Social';
import Footer from './component/Footer';

class App extends Component {
  render(){
    return (
      <div className="App">
       <HomeNav />
       <About />
       <Services />
       <Portfolio />
       <Team />
       <Contact />
       <Social />
       <Footer />
      </div>
    );
  }
}

export default App;
