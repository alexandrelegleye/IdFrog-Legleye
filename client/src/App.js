import React from "react";
import Footer from "./components/Footer/Footer"
import RouterPublic from "./pages/Public/RouterPublic"
import RouterPrivate from "./pages/Private/RouterPrivate"
import RouterAuth from "./pages/Authentification/RouterAuth"
import NavigationHeader from "./components/Navigation/NavigationHeader/NavigationHeader"
import AuthProvider from "./pages/Authentification/AuthProvider";
import Project from "./pages/Private/Project/Project"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>  
        <NavigationHeader/>
        <Routes>
          <Route path="/*" element={<RouterPublic />}/>
          <Route path="/profile/*" element={
            <AuthProvider>
              <RouterPrivate/>
            </AuthProvider>
          }/>
          <Route path="/subscribe/*" element={<RouterAuth/>}>
          
            
          </Route>
          <Route path="/project/:id" element={<Project/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
