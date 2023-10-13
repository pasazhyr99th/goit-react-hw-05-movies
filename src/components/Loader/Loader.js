import { Grid } from 'react-loader-spinner';
import { LoaderPosition } from './Loader.styled';

const Loader = () => (
  <LoaderPosition>
    <Grid
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </LoaderPosition>
);

export default Loader;