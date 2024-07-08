import Carts from "../components/carts/Carts";
// import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section className="wrapper">
        <Sidebar />
        <Carts />
      </section>
    </>
  );
};

export default Home;
