import React from 'react';
import Paper from 'material-ui/Paper';
import TableGridHeader from '../components/TableGridHeader';
import TableGridPagination from '../components/TableGridPagination';
import {Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import R from 'ramda';

const styles = {
    barStyle:{
        margin : '24px 0 0 24px'
    },
    tabLine:{
        marginTop:'1px'
    },
    thcStyle:{
        fontSize:'14px',
        color:'#999999',
        paddingLeft:'18px'
    },
    trcStyle: {
        height:'48px',
        color: '#4d4d4e',
        fontSize:'14px',
        paddingLeft:'18px'
    }
};

export default class TableGrid extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let totleStyle = Object.assign({}, styles.barStyle, this.props.style);

        const params = this.props.renderJson;

  	    const title = params.title;

  	    const columns = params.columns;

        const dataSource = params.dataSource.list;

        //是否显示分页栏
        let paginationElement = null;
        if(params.pageSize !== undefined && params.pageSize !== 0) {
            const paginationData = params.dataSource.pagination;
            paginationElement = <TableGridPagination pagination={paginationData} changePagination={this.props.changePagination}/>;
        }

        return (
            <div style={totleStyle}>

                <Paper style={{boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.3)', borderRadius:null}}>
                    <TableGridHeader title={title} />

                    <Table
        	              style={styles.tabLine}
        	              headerStyle = {{}}
        	              fixedHeader={true}
        	              fixedFooter={true}
        	              selectable={false}>

                        <TableHeader
          	                adjustForCheckbox={false}
          	                displaySelectAll={false}
          	                enableSelectAll={false} >

                            <TableRow>
            	                  {//遍历表头
              	                    R.map((item) => (
              	                       <TableHeaderColumn key={'TableHeaderColumn' + item.dataIndex} style={styles.thcStyle}>{item.text}</TableHeaderColumn>
              	                    ), columns)
            	                  }
                            </TableRow>
                        </TableHeader>
                        <TableBody stripedRows={true} displayRowCheckbox={false}>

                            {
                                dataSource.map( (row, index) => {

                                    return (
                                        <TableRow key={'TableRow-' + index}>

                                            {
                                               R.map((item) => {

                                                  return (
                                                      <TableRowColumn key={'TableRowColumn-' + item.dataIndex + '-' + index} style={styles.trcStyle}>
                                                          {row[item.dataIndex]}
                                                      </TableRowColumn>
                                                  )

                                               }, columns)
                                            }
                                        </TableRow>
                                    );

                                })
                            }
                        </TableBody>
                    </Table>
                </Paper>

                {paginationElement}

            </div>
        );
    }


}
TableGrid.propTypes = {
    renderJson: React.PropTypes.object.isRequired
}
