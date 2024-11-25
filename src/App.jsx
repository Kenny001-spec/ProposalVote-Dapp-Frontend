import "./config/connection";
import Layout from "./components/Layout";
import "./index.css";
import CreateProposalModal from "./components/CreateProposalModal";
import Proposals from "./components/Proposals";

const App = () => {
  return (
    <Layout>
      <CreateProposalModal />
      <Proposals />
    </Layout>
  );
};

export default App;
