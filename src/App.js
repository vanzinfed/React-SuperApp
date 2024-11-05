import React from "react";
import MainPage from "./components/main/MainPage";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/about/AboutSection";
import TimelineSection from "./components/TimelineSection/TimelineSection";
import FutureSection from "./components/FutureSection/FutureSection";
import AdvantagesSection from "./components/AdvantagesSection/AdvantagesSection";
import CarouselSection from "./components/CarouselSection/CarouselSection";
import BusinessSection from "./components/BusinessSection/BusinessSection";
import TeamSection from "./components/TeamSection/TeamSection";
import MapSection from "./components/MapSection/MapSection";
import Footer from "./components/Footer/Footer";
import ChatBotSection from "./components/ChatBotSection/ChatBotSection";
import VideoReviewSection from "./components/VideoReviewSection/VideoReviewSection";


function App() {

  
  return (
    <div className="App">
      <Navbar />
      <div id="main" className="section">
        <MainPage />
      </div>
      <div id="about" className="section">
        <AboutSection />
      </div>
      <div id="timeline" className="section">
        <TimelineSection />
      </div>
      <div id="advantages" className="section">
        <AdvantagesSection />
      </div>
      <div id="future" className="section">
        <FutureSection />
      </div>
      <div id="video-review" className="section">
        <VideoReviewSection />
      </div>
      <div id="example" className="section">
        <CarouselSection />
      </div>
      <div id="business" className="section">
        <BusinessSection />
      </div>
      <div id="team" className="section">
        <TeamSection />
      </div>
      <div id="contact" className="section">
        <MapSection />
      </div>
      <div id="Footer" className="section">
        <Footer />
      </div>
      <div id="chatbot" className="section">
  <ChatBotSection />
</div>
    </div>
  );
}

export default App;
