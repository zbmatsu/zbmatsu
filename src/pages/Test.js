import React from 'react';
import Radium from 'radium';
//import Paper from 'material-ui/Paper';

import TableGrid from '../components/TableGrid';
import getTableData from '../demoData/tableData'

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

const renderJson = {
    pageSize:5,
    title:'Tabels title',
    sortField:'',
    conditions:{},
    dataSource:[],
    columns:[
        { text: 'iconImage', dataIndex: 'iconImage'},
        { text: 'menuDesc', dataIndex: 'menuDesc'},
        { text: 'menuName', dataIndex: 'menuName'},
        { text: 'menuId', dataIndex: 'menuId'},
        { text: 'isEnable', dataIndex: 'isEnable'}
    ]
};


@Radium
export default class Test extends React.Component {


    render() {

        renderJson.dataSource = getTableData();
        console.log(renderJson.dataSource);

        return (
            <div>

                <div style={styles.layoutStyle}>

                    test
                    <div style={styles.widgetlargerStyle}>
                        组件样式,组件样式,组件样式,组件样式,组件样式,组件样式,组件样式,
                        组件样式,组件样式,组件样式,组件样式,组件样式,组件样式,组件样式.
                    </div>

                    <TableGrid style={styles.widgetlargerStyle} renderJson={renderJson} changePagination={this.changePagination}/>
                </div>

            </div>
        );
    }

    //table分页方法
    changePagination = (page) => {

        if(isNaN(page) === false){//是数字
            console.log(page);
        }
    }
}

Test.propTypes = {
}
