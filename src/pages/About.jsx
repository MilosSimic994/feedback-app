import {Link} from 'react-router-dom'
import Card from '../components/shared/Card';
const About = () => {
  return <Card>
      <div className="about">
          <h1>About this Project</h1>
          <p>This is a React app to leave feedback for a product or service</p>
          <p>VVersion 1.0.0</p>\

          <p>
              <Link to="/"> Go back to home </Link>
           </p>
      </div>
  </Card>
};

export default About;
