import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import {List, ListItem} from 'material-ui/List';
import {spacing} from 'material-ui/styles';
import R from 'ramda';
import PureRenderMixin from 'react-addons-pure-render-mixin';


const styles = {
    root: {
        backgroundColor:'#262626',
        width :'229px'
    },
    container: {
      backgroundColor:'#262626',
      width:'100%',
      height:'150px',
      top: (spacing.desktopGutter/2) + 150,
      bottom: '0px'
    },
    svgLogoContainer: {
      width:'100%',
      left : '0px',
      textAlign : 'center',
      marginTop : '62px',
      height: '150px'
    },
    svgLogo: {
        width: '55px',
        height: '69px'
    },
    listBg : {
        backgroundColor : '#262626',
        paddingTop : '0px',
        paddingBottom : '0px'
    },
    liBg : {
      fontFamily: 'Roboto-Medium',
      fontSize: '16px',
      color : '#d8d8d8',
      height:'48px',
      opacity: 0.5,
      lineHeight:'8px',
      borderLeft: '2px solid #262626'
    },
    nestlistItemBg : {
        fontSize: '14px',
        color: '#d8d8d8',
        backgroundColor : '#151414',
        paddingTop : '0px',
        paddingBottom : '0px'
    },
    listItemBg : {
        height:'48px',
        lineHeight:'8px',
        fontSize: '14px',
        color: '#d8d8d8',
        opacity: 0.5,
        backgroundColor : '#151414',
        paddingTop : '0px',
        paddingBottom : '0px',
        marginLeft:'-16px'
    },
    itemiconbg : {
        width: '18px',
        height: '20px',
        marginTop : '0px',
        top: '14px',
        marginLeft : '6px'
    },
    iconbg : {
       width: '6px',
       height: '6px',
       opacity: 0,
       marginTop : '12px',
       marginLeft : '40px',
       border:null
    }
}


let homeIconSrc = require('../images/logo.png');

@Radium
export default class Menu extends React.Component {

    constructor(props) {

        super(props);

        // when props no changed then no render Component
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.props.dataSource.list = [];

    }

    static contextTypes = {
        router: React.PropTypes.object
    }

    render() {

        let dataSource = this.props.dataSource;

        return (
            <div>
                <div style={styles.svgLogoContainer}>
                    <img style={styles.svgLogo} src={homeIconSrc}/>
                </div>
                <List style={styles.listBg}>
                      {
                          R.map(({menuId, menuName, url, iconImage, nestedItems, initOpen}) => {

                            	return(
                                  <ListItem
                                      ref={'menuItem-' + menuId}
                                      primaryText={menuName}
                                      style={styles.liBg}
                                      leftAvatar={<img src={iconImage} style={styles.itemiconbg}/>}
                                      initiallyOpen={initOpen}
                                      key={menuId}
                                      onClick={this.handleMenuItem.bind(this, url, menuId)}
                                      primaryTogglesNestedList={true}
									                    nestedItems={
                                         	R.map(({menuId, menuName, url, iconImage}) => (
                                              <ListItem
                                                  ref={'menuItem-' + menuId}
                                                  style={styles.listItemBg}
                                                  primaryText={menuName}
                                                  key={menuId}
                                                  onMouseEnter={this.handleMouse.bind(this, true)}
                                                  onMouseLeave={this.handleMouse.bind(this, false)}
                                                  onClick={this.handleSubMenuItem.bind(this, url, menuId)}
                                                  leftAvatar={<img src={iconImage} style={styles.iconbg} />}
                                              />
                                          ), nestedItems)
                                      }
                                      nestedListStyle={styles.nestlistItemBg}
                                  />
                              )
                          }, dataSource)
                      }
                  </List>
            </div>
        );
    }


    changeMenuItem = (menuId) => {

        let dataSource = this.props.dataSource;

        R.map((item) => {
            let key = 'menuItem-' + item.menuId;
            let menuListDom = ReactDOM.findDOMNode(this.refs[key]);
            if(item.menuId === menuId){
                menuListDom.childNodes[0].style.opacity=1;
                menuListDom.childNodes[0].style.borderLeft = '2px solid #ff0000';
            }else{
                menuListDom.childNodes[0].style.opacity=0.5;
                menuListDom.childNodes[0].style.borderLeft = '2px solid #262626';
            }
        }, dataSource);
    }

    changeSubMenuItem = (menuId) => {

        let dataSource = this.props.dataSource;

        R.map((item) => {

            R.map((subItem) => {

                let key = 'menuItem-' + subItem.menuId;
                let menuListDom = ReactDOM.findDOMNode(this.refs[key]);

                let textDom = menuListDom.childNodes[0];

                //需要自己定位节点
                let iconDom = textDom.childNodes[0].childNodes[1] === undefined ? textDom.childNodes[0].childNodes[0].childNodes[0] : textDom.childNodes[0].childNodes[1].childNodes[0];

                if(subItem.menuId === menuId){//需要点亮的子菜单

                    this.changeMenuItem(item.menuId);//点亮父菜单
                    textDom.style.opacity=1;//菜单字体
                    iconDom.style.opacity=1;//菜单图标
                }else{
                    textDom.style.opacity=0.5;
                    iconDom.style.opacity=0;
                }

            }, item.nestedItems);

        }, dataSource);
    }

    handleMenuItem = (pathname, menuId) => {

        this.changeMenuItem(menuId);

        if(pathname !== null && pathname !== ''){

            this.changeSubMenuItem(null);
            //push(pathname, search, state)  search:'?a=query' state:{ the: 'state' }
            this.context.router.push(pathname);
        }
  	}

  	handleSubMenuItem = (pathname, menuId) => {

        this.changeSubMenuItem(menuId);
        this.context.router.push(pathname);
  	}

    //鼠标移动到菜单的事件
  	handleMouse = (overFlag, event) => {

        let currentDom = event.currentTarget.childNodes[0];
        let domOpacity = currentDom.childNodes[1] === undefined ? currentDom.childNodes[0].childNodes[0] : currentDom.childNodes[1].childNodes[0];

        if(domOpacity.style.opacity !== '1'){
            overFlag === true ? event.currentTarget.style.opacity = 1 : event.currentTarget.style.opacity = 0.5;
        }

  	}


}

Menu.propTypes = {
    defaultPath:React.PropTypes.string,
    dataSource:React.PropTypes.array
}
