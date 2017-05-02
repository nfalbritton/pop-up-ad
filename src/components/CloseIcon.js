import React from 'react';

class CloseIcon extends Component {
  render() {
    return (
      <button className="close-icon" aria-label="Close window" type="button" onClick={this.handleWindowClose.bind(this)}>
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
    );
  }

    handleWindowClose() {
      confirm("Are you sure?");
    }
  }

export default CloseIcon;
