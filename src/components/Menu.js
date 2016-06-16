import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import {List, ListItem} from 'material-ui/List';
import {spacing} from 'material-ui/styles';
import menuData from '../demoData/menuData';
import R from 'ramda';


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


    render() {

        return (
            <div>
                <div style={styles.svgLogoContainer}>
                    <img style={styles.svgLogo} src={homeIconSrc}/>
                </div>
                <List style={styles.listBg} ref="menuList">
                      {
                          R.map(({menuId, menuName, url, iconImage, nestedItems, initOpen}) => {

                            	return(
                                  <ListItem
                                      primaryText={menuName}
                                      style={styles.liBg}
                                      leftAvatar={<img src={iconImage} style={styles.itemiconbg}/>}
                                      initiallyOpen={initOpen}
                                      key={menuId}
                                      value={url}
                                      onClick={this.onChangeStyle.bind(this, url)}
                                      primaryTogglesNestedList={true}
									                    nestedItems={[
                                       	R.map(({menuId, menuName, url, iconImage}) => (
                                            <ListItem
                                               style={styles.listItemBg}
                                               primaryText={menuName}
                                               key={menuId}
                                               onMouseEnter={this.onChangeSubItemStyle.bind(this, true)}
                                               onMouseLeave={this.onChangeSubItemStyle.bind(this, false)}
                                               onClick={this.onMenuChange.bind(this, url)}
                                               leftAvatar={<img src={iconImage} style={styles.iconbg} />}
                                            />
                                        ), nestedItems)
                                    ]}
                                    nestedListStyle={styles.nestlistItemBg}
                                  />
                              )
                          }, eval(menuData()))
                      }
                  </List>
            </div>
        );
    }

    onChangeStyle = (pathname, event) => {

      let menuListDom = ReactDOM.findDOMNode(this.refs.menuList);

      let menuListDomChildNodes = menuListDom.childNodes;
    	for(let i=0;i<menuListDomChildNodes.length;i++){
          menuListDomChildNodes[i].childNodes[0].style.opacity=0.5;
          menuListDomChildNodes[i].childNodes[0].style.borderLeft = '2px solid #262626';
      }
	    event.currentTarget.style.opacity=1;
	    event.currentTarget.style.borderLeft = '2px solid #ff0000';

      if(pathname !== null && pathname !== ''){
          this._currentTarget = event.currentTarget;
          //clean second menu checked style
          for(let i=0;i<menuListDomChildNodes.length;i++){
              let secondMenuDom = menuListDomChildNodes[i].childNodes[1];// second menu
              if(secondMenuDom !== undefined){
                  let secondMenuDomChildNodes = secondMenuDom.childNodes;
                  for(let j=0;j<secondMenuDomChildNodes.length;j++){
                      secondMenuDomChildNodes[j].childNodes[0].style.opacity = 0.5;
                      if(secondMenuDomChildNodes[j].childNodes[0].childNodes[0].childNodes[0].style.overflow === 'hidden'){
                          secondMenuDomChildNodes[j].childNodes[0].childNodes[0].childNodes[1].childNodes[0].style.opacity = 0;
                      }else{
                          secondMenuDomChildNodes[j].childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.opacity = 0;
                      }
                  }
              }
          }
          this.props.history.pushState(null, pathname);
      }
  	}

  	onChangeSubItemStyle = (overFlag, event) => {
        let domOpacity = null;
        if(event.currentTarget.childNodes[0].childNodes[1] === undefined){
            domOpacity = event.currentTarget.childNodes[0].childNodes[0].childNodes[0].style.opacity;
        }else{
            domOpacity = event.currentTarget.childNodes[0].childNodes[1].childNodes[0].style.opacity;
        }
        if(domOpacity !== '1'){
            if(overFlag){
                event.currentTarget.style.opacity = 1;
            }else{
                event.currentTarget.style.opacity = 0.5;
            }
        }

  	}

    _currentTarget = null;
  	onMenuChange = (pathname, event) => {

        this._currentTarget = event.currentTarget;
        let menuListDom = ReactDOM.findDOMNode(this.refs.menuList);
        let menuListDomChildNodes = menuListDom.childNodes;
      	for(let i=0;i<menuListDomChildNodes.length;i++){
            let secondMenuDom = menuListDomChildNodes[i].childNodes[1];// second menu
            if(secondMenuDom !== undefined){
                let secondMenuDomChildNodes = secondMenuDom.childNodes;
                for(let j=0;j<secondMenuDomChildNodes.length;j++){
                    if(event.currentTarget === secondMenuDomChildNodes[j].childNodes[0]){
                        event.currentTarget.style.opacity = 1;
                        event.currentTarget.childNodes[0].childNodes[1].childNodes[0].style.opacity = 1;
                    }else{
                        secondMenuDomChildNodes[j].childNodes[0].style.opacity = 0.5;
                        if(secondMenuDomChildNodes[j].childNodes[0].childNodes[0].childNodes[0].style.overflow === 'hidden'){
                            secondMenuDomChildNodes[j].childNodes[0].childNodes[0].childNodes[1].childNodes[0].style.opacity = 0;
                        }else{
                            secondMenuDomChildNodes[j].childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.opacity = 0;
                        }

                    }
                }
            }
        }
        this.props.history.pushState(null, pathname);
  	}


    componentDidUpdate(){

        let menuListDom = ReactDOM.findDOMNode(this.refs.menuList);
        let menuListDomChildNodes = menuListDom.childNodes;
        for(let i=0;i<menuListDomChildNodes.length;i++){
            menuListDomChildNodes[i].childNodes[0].style.opacity=0.5;
            menuListDomChildNodes[i].childNodes[0].style.borderLeft = '2px solid #262626';
        }
        if(this._currentTarget !== null) {
            this._currentTarget.style.opacity = 1;

            if(this._currentTarget.parentNode.parentNode.previousSibling === null){
                this._currentTarget.style.borderLeft = '2px solid #ff0000';
            }else{
              this._currentTarget.parentNode.parentNode.previousSibling.style.opacity=1;
              this._currentTarget.parentNode.parentNode.previousSibling.style.borderLeft = '2px solid #ff0000';
            }

        }else{
            menuListDomChildNodes[0].childNodes[0].style.opacity=1;
            menuListDomChildNodes[0].childNodes[0].style.borderLeft = '2px solid #ff0000';
            if(menuListDomChildNodes[0].childNodes[1].childNodes[0].childNodes[0] !== undefined){
                menuListDomChildNodes[0].childNodes[1].childNodes[0].childNodes[0].style.opacity = 1;
                if(menuListDomChildNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0] !== undefined){
                    menuListDomChildNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.opacity = 1;
                }

            }
        }
    }
}

Menu.propTypes = {
}
