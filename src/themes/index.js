import R from 'ramda'
import {
cyan500, cyan700,
grey100, grey300, grey500,
pinkA200,
white, darkBlack,lightBlack
} from 'material-ui/styles/colors';

import {fade} from 'material-ui/utils/colorManipulator';

export default config => R.merge({
    spacing: {
        iconSize: 24,
        desktopGutter: 24,
        desktopGutterMore: 32,
        desktopGutterLess: 16,
        desktopGutterMini: 8,
        desktopKeylineIncrement: 64,
        desktopDropDownMenuItemHeight: 32,
        desktopDropDownMenuFontSize: 15,
        desktopDrawerMenuItemHeight: 48,
        desktopSubheaderHeight: 48,
        desktopToolbarHeight: 56
    },
    fontFamily: 'Roboto-Regular',
    palette: {
        primary1Color: cyan500,
        primary2Color: cyan700,
        primary3Color: lightBlack,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3)
    }
}, config || {})
