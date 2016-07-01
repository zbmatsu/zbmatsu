import React from 'react';
import Radium from 'radium';
//import Paper from 'material-ui/Paper';


const styles = {
    //外部样式
    layoutStyle: {
        padding: '0 24px 24px 0',
        alignContent: 'space-around'
    },
    //行内div样式
    lineLayoutStyle: {
        display:'flex',
        flexFlow:'row wrap'
    },
    //行内样式中的小组件样式
    widgetSmallStyle: {
        margin: '24px 0 0 24px',
        flex: '1',
        minWidth:350
    },
    //组件样式
    widgetlargerStyle: {
        margin: '24px 0 0 24px',
        width: null
    }

};



@Radium
export default class Test extends React.Component {


    render() {

        return (
            <div>

                <div style={styles.layoutStyle}>

                    test
                    <div style={styles.widgetlargerStyle}>
                        组件样式,组件样式,组件样式,组件样式,组件样式,组件样式,组件样式,
                        组件样式,组件样式,组件样式,组件样式,组件样式,组件样式,组件样式.
                    </div>
                </div>

            </div>
        );
    }
}

Test.propTypes = {
}
