import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="main-content">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
