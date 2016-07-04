import React from 'react';
import Radium from 'radium';

@Radium
export default class Header extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
          <div>
              <div style={{textAlign:'center', fontSize:'22px', lineHeight:'80px'}}>header...</div>
          </div>
        );
    }

}

Header.propTypes = {
}
