import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedBackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
          id: 1,
          rating: 10,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },
        {
          id: 2,
          rating: 9,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },
        {
          id: 3,
          rating: 8,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },
      ])

      const [feedbackEdit, setFeedbackEdit] = useState({
          item: {},
          edit: false
      })

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
          setFeedback(
            feedback.filter((item) => {
              return item.id !== id;
            })
          );
        }
      };

      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
        console.log(newFeedback);
      };

      const editFeedback  = (item) => {
          setFeedbackEdit({item, edit: true})
      }

      const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item) ))
      }

return <FeedBackContext.Provider value={{
    feedback,
    feedbackEdit,
    updateFeedback,
    deleteFeedback,
    addFeedback,
    editFeedback,


}}>
    {children}
</FeedBackContext.Provider>

}

export default FeedBackContext