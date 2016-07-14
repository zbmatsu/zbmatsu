import React from 'react';
import NavigationArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';

import Paper from 'material-ui/Paper';
import R from 'ramda';


const styles = {
    barStyle: {
        height:47,
        marginTop:'24px',
        width:'100%',
        textAlign:'center',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        boxShadow:null,
        backgroundColor:'#f4f4f4'
    },
    leftStyle: {
    },
    buttonStyle: {
    	height:'36px',
    	lineHeight:'36px',
    	width:'36px',
    	borderRadius: '2px',
    	backgroundColor: '#ffffff',
    	border: 'solid 2px #ececec',
    	marginRight:'8px',
    	fontSize:'18px',
    	fontFamily: 'Roboto-Medium',
    	color:'#d8d8d8',
    	cursor: 'pointer'
    }
};


export default class TableGridPagination extends React.Component {

  	constructor(props) {
   	 	  super(props);
  	}

  	getTotalPage = (pagination) => {

    		let totalPage = 1;

    		if(pagination.totleSize === undefined || pagination.totleSize === 0) return totalPage;

    		if(pagination.totleSize % pagination.pageSize === 0){
  			totalPage = pagination.totleSize/pagination.pageSize;
		}else{
			   totalPage = Math.floor(pagination.totleSize/pagination.pageSize) + 1;
		}

		return totalPage;

  	}

  	clickPage = (value) => {

    		const { pagination, changePagination } = this.props;

    		let pages = parseInt(value);

    		if(pages === pagination.pageIndex) return;

    		if(changePagination !== undefined)  changePagination(pages);
  	}

  	perClick = () => {
    		const { pagination, changePagination } = this.props;

    		if(pagination.pageIndex - 1 <= 0) return;

    		if(changePagination !== undefined)  changePagination(pagination.pageIndex - 1);
  	}

  	nextClick = () => {
    		const { pagination, changePagination } = this.props;

    		if(pagination.pageIndex + 1 > this.getTotalPage(pagination)) return;

    		if(changePagination !== undefined)  changePagination(pagination.pageIndex + 1);
  	}


    render() {

  	    const {pagination} = this.props;

        let totelStyle = Object.assign({}, styles.barStyle, this.props.style)

        let totalPage = this.getTotalPage(pagination);

        let currentPage = 1;

        currentPage = pagination.pageIndex;

        let maps = [];
        for(let i=1;i<=totalPage;i++){
        	maps.push(i);
        }

      	return  (
           	<Paper style={totelStyle}>
                  <span style={styles.leftStyle}>
                  </span>
                  <span>
                  </span>
                  <span style={{display:'flex'}}>
                    	<div style={styles.buttonStyle} onClick={this.perClick}> <NavigationArrowDropDown style={{marginTop: '8px', transform: 'rotate(90deg)', fill:'#999999'}}/> </div>
                    	{
      	                	R.map((item) => (//遍历数据
      	            			      <div key={item} style={item === currentPage ? Object.assign({}, styles.buttonStyle, {border: 'solid 2px #999999', color:'#565656'}) : styles.buttonStyle} onClick={this.clickPage.bind(this, item)}>{item}</div>
      		              	), maps)
                    	}
                      <div style={Object.assign({}, styles.buttonStyle, {marginRight:'0px'})} onClick={this.nextClick}> <NavigationArrowDropDown style={{marginTop: '8px', transform: 'rotate(270deg)', fill:'#999999'}}/> </div>
                  </span>

           </Paper>
  		 );
    }
}


TableGridPagination.propTypes = {
  	pagination: React.PropTypes.object.isRequired,
  	changePagination:React.PropTypes.func
}
