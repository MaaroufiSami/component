import logo from './logo.svg';
import './App.css';
import Photo from './component/profile/ProfilePhoto';
import Navbar from './component/Navbar';
import Address from './component/profile/Address';
import UsersList from './component/profile/FullName';


function App() {
  
  return (
    <div className="App">
     <div class="card" >
 
 <div class="card-body">
   <Photo/>
   <h5 class="card-title" > VIP</h5>
   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 </div>
 <ul class="list-group list-group-flush">
   <li class="list-group-item"><UsersList/></li>
   
   <li class="list-group-item"><Address/></li>
 </ul>
 <div class="card-body">
   <a href="#" class="card-link">Card link</a>
   <a href="#" class="card-link">Another link</a>
 </div>
</div>
    </div>
  );
}

export default App;
