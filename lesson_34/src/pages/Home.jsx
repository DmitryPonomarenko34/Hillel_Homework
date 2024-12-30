import { Form } from 'react-final-form';
import SelectLabels from '../components/SelectLabels';
import BasicDateRangePicker from '../components/BasicDateRangePicker';

const HomePage = () => {
  return (
    <Form
      onSubmit={() => {}}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <SelectLabels name="destination" label={'Destination'} items={[]} />
          <BasicDateRangePicker />
          <BasicDateRangePicker />
          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
};

export default HomePage;
