import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Search from "./components/search/Search.jsx";
import Table from "./components/table/Table.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Search />
        <Table />
      </main>
      <Footer />
    </>
  );
}

export default App;
