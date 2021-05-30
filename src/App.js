import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavbarSplit from './partials/NavbarSplit';
import SidenavSplit from './partials/SidenavSplit';
import Content from './Content';

function App() {
  return (
    <div className="wrapper">
      <SidenavSplit></SidenavSplit>
      <div className="main-wrapper">
        <NavbarSplit></NavbarSplit>
        <div className="content">
          <Content></Content>
        </div>
      </div>
    </div>
  );
}

export default App;
