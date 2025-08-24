import { CountView } from "@nx-vite-module-federation-complete-example/shared-ui";

const Home = () => {
  return <CountView title="Module 1" isRemote={import.meta.env.VITE_MODULE1_IS_REMOTE} />;
};

export default Home;
