import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh' 
    }}>
      <Header />
      <div style={{ flex: 1 }}> {/* This pushes the footer down */}
        <MainContent />
        <UserProfile name="Alice" age="25" bio="Loves hiking" />
        
      </div>
      <Counter />
      <Footer />
    </div>
  );
}
  

export default App