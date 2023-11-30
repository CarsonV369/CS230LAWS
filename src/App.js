import 'index.js';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      navbarNav;
      <h1>
        CS 230L
      </h1>
      <h2>
        Section -- 003
      </h2>
      <p>
        WVU ID 800283624
      </p>
      <p>
        Hi I am Carson Verlinden
      </p>
    </div>
  );
}
<div className="App">
   <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
   </BrowserRouter>
 </div>

export default App;
