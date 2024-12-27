import { Form } from 'react-final-form';
import SelectLabels from '../components/SelectLabels';
import BasicDatePicker from '../components/BasicDatePicker';

const HomePage = () => {
  return (
    <Form
      onSubmit={() => {}}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <SelectLabels name="destination" label={'Destination'} items={[]} />
          <BasicDatePicker name={'checkin'} label={'Checkin'} />
          <BasicDatePicker name={'checkout'} label={'Checkout'} />
          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
};

export default HomePage;
