import React from 'react';

import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ContentAddBox from 'material-ui/svg-icons/content/add-box';


const styles = {
    barStyle: {
        height:'48px',
        width:'100%',
        textAlign:'center',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    leftStyle:{
        marginLeft:16,
        fontSize: 22,
        color: '#4d4d4e',
        alignItems:'center',
        display:'flex',
        width:'178px',
        whiteSpace: 'nowrap'
    }
};

export default class TableGridHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick = () => {

    }

    render() {

        let totelStyle = Object.assign({}, styles.barStyle, this.props.style)

        return (
            <Paper style={totelStyle}>
                <div style={styles.leftStyle}>
                    {this.props.title}
                </div>
                <div>
                    <IconButton onClick={this.handleClick}>
                        <ContentAddBox style={{height: '34px', width: '34px', marginTop: '-5px', marginLeft: '-5px', fill:'#565656'}}/>
                    </IconButton>
                </div>
            </Paper>
        );
    }

}

TableGridHeader.propTypes = {
    title: React.PropTypes.string.isRequired
}
