import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

<<<<<<< HEAD
import Navbar from "./compoments/Navbar";
import { Feed } from "./compoments";
import Videodetails from "./compoments/Videodetails";
import ChannelDetail from "./compoments/Channeldetails";
import Searchfeed from "./compoments/Searchfeed";

const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
      <navbar/>
=======
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
>>>>>>> 9d56a48c05ed6c377090c41e0a98f68e147df789
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;