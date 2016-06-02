require('styles/App.css');

import React from 'react';
import {connect} from 'react-redux'
import { login } from 'stores/modules/user';

let yeomanImage = require('../images/yeoman.png');


const mapStateToProps = (state) => ({
  userProps: state.user
});

@connect(mapStateToProps)
export default class Main extends React.Component {

  componentDidMount() {
  	const { dispatch } = this.props;
  	dispatch(login());
	}

class AppComponent extends React.Component {
   render() {
     return (
       <div className="index">
         <img src={yeomanImage} alt="Yeoman Generator" />
         <div className="notice">mainPage...</div>
       </div>
     );
   }
 }

Main.propTypes = {
}
