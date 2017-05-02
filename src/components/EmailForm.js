import React from 'react';

class EmailForm extends Component {
  render() {
    return
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input className="eaddress" type="text" dowplaceholder="Your email here"></input>
      <button input type="submit" className="button">Claim Your Prize</button>
      </form>
    };
  };

export default EmailForm;
