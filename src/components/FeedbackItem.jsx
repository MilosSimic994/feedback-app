import Card from "./shared/Card";
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from "react";
import FeedBackContext from "../context/FeedbackContext";

const FeedbackItem = ({item, }) => {
    const {deleteFeedback,editFeedback} = useContext(FeedBackContext)
 const {rating, text} = item


  return <div>
      <Card >
          <div className="num-display">{rating}</div>
          <button className="close" onClick={ () => deleteFeedback(item.id)}><FaTimes color='purple'/></button>
          <button className="edit" onClick={()=> editFeedback((item))}>
              <FaEdit color='purple' />
          </button>
          <div className="text-display">{text}</div>
      </Card>
  </div>;
};

export default FeedbackItem;
