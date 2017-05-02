import React from 'react';
import CloseIcon from './CloseIcon';
import EmailForm from './EmailForm'

class Popup extends React.Component {
  render() {
    let handleSubmit = event => {
      event.preventDefault();
    };

    let handleWindowClose = event => {
      event.preventDefault();
    };
  }

  return(
    <div className= "row column">
      <CloseIcon handleWindowClose={handleWindowClose} />
      <h2 className= "heading">You won tickets to see Andrea Bocelli!! />
      <h4 className= "subheading">Please enter your e-mail so we can send you the tickets: />
      <EmailSubmit handleSubmit={handleSubmit} />
    </div>
  );
};

export default Popup;
