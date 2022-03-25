// import HomePageContent from "./HomePageContent";
//  import MainTheme from "./Theme/MainTheme";
import Header from "./Header";
import Footer from "./Footer";
import Banners from "./Banners";
import Product from "./Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";


function App() {
  return (
    <Router>
      <Header  />
      <Switch>
        <Route exact path="/">
          <div className="max-w-screen-2xl mx-auto ">
            <Banners />
            <Product /> 
          </div>
        </Route>
        <Route path="/">
          <About/>
        </Route>
       

        

       
        
      </Switch>
      {/* <div className="min-h-screen"></div> */}
      <Footer />
    </Router>
  );
  
  }

 


export default App;
