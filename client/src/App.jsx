import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import UserList from "./components/user-list/UserList.jsx";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <UserList />
      </main>
      <Footer />
    </>
  );
}

export default App;
