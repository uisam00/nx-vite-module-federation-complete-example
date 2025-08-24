import { CountView } from '@shared-ui';

const Home = () => {
  return (
    <CountView
      title="Module 1"
      isRemote={import.meta.env.VITE_MODULE1_IS_REMOTE}
      linkTo={["/module-2"]}
    />
  );
};

export default Home;
