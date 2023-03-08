import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import Navbar from "./compoments/Navbar";
import { Feed } from "./compoments";
import Videodetails from "./compoments/Videodetails";
import ChannelDetail from "./compoments/Channeldetails";
import Searchfeed from "./compoments/Searchfeed";

const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
      <navbar/>
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id"element={<videoDetail />} />
        <Route path="/channel/:id"element={<ChannelDetail />} />
        <Route path="/search/:searchTerm"element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
  
);
export default App;