import NavBar from './Components/NavBar/NavBar';
import React from 'react';
import { action ,originals,Horror, Romance, trending, Comedy, Documentaries, Popular, Upcoming} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost  url={originals} title='Netflix Orginals'/>
     <RowPost  url={Upcoming} title='Upcoming Movies'isSmall/>
     <RowPost  url={trending} title='Trending' isSmall/>
     <RowPost  url={Popular} title='Top Rated' isSmall/>
     <RowPost  url={action} title='Action' isSmall/>
     <RowPost  url={Horror} title='Horror' isSmall/>
     <RowPost  url={Romance} title='Romance' isSmall/>
     <RowPost  url={Comedy} title='Comedy' isSmall/>
     <RowPost  url={Documentaries} title='Documentaries' isSmall/>
     <Footer />
    </div>
  );
}

export default App;
