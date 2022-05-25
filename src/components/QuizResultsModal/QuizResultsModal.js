import React, {useContext} from 'react';
import './QuizResultsModal.css'
import Popup from 'reactjs-popup';

import { DataContext } from '../../contexts/DataContext'


const QuizResultsModal = () => {
  const repData = useContext(DataContext)

  return (  
    <Popup
      trigger={<button className="button"> See more results! </button>}
      modal
      nested
    >
      {close => (
        <div className="modal">
          <div className="modal-header"> 
          More results
          <button className="modal-close" onClick={close}>
            &times;
          </button>
          </div>
          <div className="content">
            <p className='modal-tiles one'>You are {repData.currentQuizResult.national_parks_conservation}% in support of the federal government mitigating climate change.</p>
            <p className='modal-tiles two'>You are {repData.currentQuizResult.americans_for_prosperity}% in support of the federal government not raising minimum wage.</p>
            <p className='modal-tiles three'>You are {repData.currentQuizResult.numbers_usa}% in support of the federal government building a wall along the southern border.</p>
            <p className='modal-tiles four'>You are {repData.currentQuizResult.aclu}% in support of transgender inclusion in sports.</p>
            <p className='modal-tiles five'>You are {repData.currentQuizResult.norml}% in support of the federal government legalizing marijuana.</p>
            <p className='modal-tiles six'>You are {repData.currentQuizResult.national_association_of_police}% in support of funding the police.</p>
            <p className='modal-tiles seven'>You are {repData.currentQuizResult.end_citizens_united}% in support of campaign spending limits.</p>

          </div>
        </div>
      )}
  </Popup>
  );
}

 
export default QuizResultsModal;