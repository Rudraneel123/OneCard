// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Skills';
import Intro from './Intro';
import {Card} from 'react-bootstrap';
import Details from './Details';
function App() {
  return (
    // <Card style={{height:'500px',width:'300px',display: 'flex', justifyContent: 'center', alignItems: 'center',marginLeft:'200px',marginTop:'200px'}}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,background: 'linear-gradient(to bottom,#d1df66, #3f61bc)'}}>
      <Card style={{ width: '403px', height: '545px', backgroundColor: '#14cbed', marginTop: '50px', marginBottom: '70px', boxShadow: '2px 2px 4px black', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h4 style={{ textAlign: 'center', marginTop: '10px' }}>Rudraneel Guha</h4>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <img src='AvatarMaker.png' alt='avatar' style={{ height: '165px', width: '140px', borderRadius: '71px', backgroundColor: '#e8e467' }} />
          </div>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Intro/>
          </div>
        </div>
        <div>
          <Details />
          <Skills />
        </div>
      </Card>
    </div>
    // </Card>
  );
  
}

export default App;
