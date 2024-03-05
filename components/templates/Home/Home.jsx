import Banner from "../../HomeComponents/Banner";
import { CommercialProjects, Layout } from "../../organisms";
import { Sidebar } from "@/components/organisms";
import "./index.module.css";

const Home = () => {
  return (
    // <Layout>
    //   <div className="Home-Page">
    //     <Banner />
    //     <CommercialProjects />
    //     {/* <MyExpertise />
    //   <Recommendations />
    //   <ClientReviews /> */}
    //     {/* <Footer /> */}
    //   </div>
    // </Layout>
    <main className="home">
      <Sidebar />
    </main>
  );
};

export default Home;
