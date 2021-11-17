import Button from '@mui/material/Button';

import Singin from './components/Singin';

function HomePage() {
  return (
    <div className="content">
      <Button variant="contained">Hello World</Button>
      <Singin/>
    </div>
  );
}

export default HomePage;
