import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Search from "./components/search/Search.jsx";
import UserList from "./components/user-list/UserList.jsx";

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
