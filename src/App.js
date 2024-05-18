import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmojiSurvey } from "./Components/emoji-survey";
import { Home } from "./Components/home";
import { DataProvider } from './DataContext';
import { StarSurvey } from "./Components/star-survey";
import { ResultButton } from "./Components/result-button";
import { ShowResult } from "./Components/show-result";


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/emoji-survey" element={<EmojiSurvey />} />

          <Route path="/star-survey" element={<StarSurvey />} />
          <Route path="/result-survey" element={<ResultButton/>}/>
          <Route path="/show-result" element={<ShowResult/>}></Route>
        </Routes>
      </BrowserRouter></DataProvider>
  );
}

export default App;