import { React , useState } from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches() {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch defaultChecked color="default" inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
    </div>
  );
}
