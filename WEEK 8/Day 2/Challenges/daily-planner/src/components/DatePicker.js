import { useDispatch, useSelector } from 'react-redux';
import { setDay } from '../redux/actions';

export default function DatePicker() {
  const selectedDay = useSelector(state => state.selectedDay);
  const dispatch = useDispatch();

  return (
    <input
      type="date"
      value={selectedDay}
      onChange={e => dispatch(setDay(e.target.value))}
    />
  );
}
