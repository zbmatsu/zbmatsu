import React from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import {container} from '../styles';


import Header from '../components/Header';
import Content from '../components/Content';
import Menu from '../components/Menu';

//let yeomanImage = require('../images/yeoman.png');

const styles = {
    left: {
        backgroundColor:'#262626',
        WebkitFlex: 'none',
        flex: 'none',
        width:'229px',
        left:'0px',
        top: '0px',
        position: 'fixed',
        overflow: 'auto',
        minHeight:'calc(100%)'
    },
    right : {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 'calc(100% - 229px)',
        minHeight: 'calc(100%)'
    },
    header : {
        backgroundColor: '#ffffff',
        height: '80px',
        width:'100%',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2)'
    },
    content : {
        width:'100%',
        backgroundColor: '#f4f4f4',
        minHeight: '585px'
    }
};


const mapStateToProps = (state) => ({
    themeProp: state.theme,
    username: 'zbmatsu'
});

@connect(mapStateToProps)
@Radium
export default class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {open: true, docked:true};
    }

    componentDidMount() {
        console.log(this.props.themeProp);
  	}


    render() {

        let username = this.props.username;
        let {history} = this.props;

        return (
            <div style={container}>
                <div style={styles.left}>
                    <Menu history={history} />
                </div>
                <div style={styles.right}>
                    <div style={styles.header}><Header username={username} /></div>
                    <div style={styles.content}><Content page={this.props.children}/></div>
                </div>
            </div>
        );
    }
}


Main.propTypes = {
}
