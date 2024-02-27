import Banner from "../../HomeComponents/Banner";
import { CommercialProjects, Layout } from "../../organisms";

const Home = () => {
  return (
    <Layout>
      <div className="Home-Page">
        <Banner />
        <CommercialProjects />
        {/* <MyExpertise />
      <Recommendations />
      <ClientReviews /> */}
        {/* <Footer /> */}
      </div>
    </Layout>
  );
};

export default Home;
