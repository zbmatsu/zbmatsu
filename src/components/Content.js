import React from 'react';
import Radium from 'radium';


@Radium
export default class Content extends React.Component {

    render() {
        let {page} = this.props;

        return (
          <div>
            {page}
          </div>
        );
    }
}

Content.propTypes = {
    page:React.PropTypes.object
}
