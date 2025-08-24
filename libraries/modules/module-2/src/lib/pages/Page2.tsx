import { CountView } from '@shared-ui';

const Page2 = () => {
  return (
    <CountView
      title="Module 2 Page 2"
      isRemote={import.meta.env.VITE_MODULE2_IS_REMOTE}
      linkTo={['/module-1', '/module-2/page-2']}
    />
  );
};

export default Page2;
