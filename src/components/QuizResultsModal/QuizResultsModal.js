import React, {useContext} from 'react';
import './QuizResultsModal.css'
import Popup from 'reactjs-popup';
import { DataContext } from '../../contexts/DataContext'
import {MdOutlineHowToVote} from 'react-icons/md'


const QuizResultsModal = () => {
  const repData = useContext(DataContext)

  return (  
    <Popup
      trigger={<button className="modal-button"> See more results! </button>}
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
              <p className='modal-tiles one'><MdOutlineHowToVote className='vote-icon'/> You are {<p className='modal-tiles-em'>{repData.currentQuizResult.national_parks_conservation}% </p>} in support of the government {<p className='modal-tiles-em'>mitigating climate change.</p>}</p>
              <p className='modal-tiles two'><MdOutlineHowToVote className='vote-icon'/> You are {<p className='modal-tiles-em'>{repData.currentQuizResult.americans_for_prosperity}% </p>} in support of the government {<p className='modal-tiles-em'>not raising</p>} minimum wage.</p>
              <p className='modal-tiles three'><MdOutlineHowToVote className='vote-icon'/> You are {<p className='modal-tiles-em'>{repData.currentQuizResult.numbers_usa}% </p>} in support of {<p className='modal-tiles-em'>building a wall</p>} on the southern border.</p>
              <p className='modal-tiles four'><MdOutlineHowToVote className='vote-icon'/> You are {<p className='modal-tiles-em'>{repData.currentQuizResult.aclu}% </p>} in support of {<p className='modal-tiles-em'>transgender inclusion</p>} in sports.</p>
              <p className='modal-tiles five'><MdOutlineHowToVote className='vote-icon'/> You are {<p className='modal-tiles-em'>{repData.currentQuizResult.norml}% </p>} in support of the federal government {<p className='modal-tiles-em'>legalizing marijuana.</p>}</p>
              <p className='modal-tiles five'><MdOutlineHowToVote className='vote-icon'/> You are {<p className='modal-tiles-em'>{repData.currentQuizResult.national_association_of_police}% </p>} in support of {<p className='modal-tiles-em'>funding the police.</p>}</p>
              <p className='modal-tiles five'><MdOutlineHowToVote className='vote-icon'/> You are {<p className='modal-tiles-em'>{repData.currentQuizResult.end_citizens_united}% </p>} in support of {<p className='modal-tiles-em'>campaign spending limits.</p>}</p>
          </div>
        </div>
      )}
  </Popup>
  );
}

 
export default QuizResultsModal;