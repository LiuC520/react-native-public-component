/**
 * author: liucheng 
 * e-mail: 674668211@qq.com
 * instructions: 此页面为公共组件，左侧可以为图片 文字 ，右侧为文字 输入框 箭头
 *               可以自定义左侧点击事件、右侧点击事件、显示左侧图片、显示右侧图片、右侧箭头
 *               可以自定义样式
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';

import  dimens  from './dimens';

const barBtnWidth = 40;
class PublicCompoennt extends Component{
    constructor(props){
        super(props);
    }

    static propTypes = {
        /**
         * 整个容器的样式，可以设置padding、margin、背景颜色等等
         * whole container styles , padding margin backgroundColor ...
         * @type {Object,number} number为const引入的
        */
        containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        /**
         * 自定义左侧组件
         * left custom component
         * @type {node}
        */
        leftComponent: PropTypes.node,
        /**
         * 自定义中间组件
         * center custom component
         * @type {node}
        */
        centerContent: PropTypes.node,
        /**
         * 自定义右侧组件
         * right custom component
         * @type {node}
        */
        rightComponent: PropTypes.node,
        /**
         * 左侧组件样式
         * left container styles
         * @type {Object, number}number为const引入的
        */
        leftComponentStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        /**
         * 中间组件样式
         * center container styles
         * @type {Object, number}number为const引入的
        */
        centerContentStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        /**
         * 右侧组件样式
         * right container styles
         * @type {Object, number}number为const引入的
        */
        rightComponentStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        /**
         * 左侧图标
         * left icon
         * @type {Object, number}number为require引入
        */
        leftIcon:  PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        /**
         * 右侧图标
         * right icon
         * @type {Object, number}number为require引入
        */
        rightIcon:  PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        /**
         * 右侧箭头
         * right arrow
         * @type {Object, number}number为require引入
        */
        rightArrow:  PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        /**
         * 右侧箭头样式
         * right arrow styles
         * @type {Object, number}number为const引入的
        */
        rightArrowStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        /**
         * 是否显示右侧箭头
         * whether show right arrow
         * @type {Boolean, number}number为const引入的
        */
        isRightArrowShow: PropTypes.bool,
        /**
         * 左侧图标样式
         * left icon styles
         * @type {Object, number}number为const引入的
        */
        leftIconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        /**
         * 右侧图标样式
         * right icon styles
         * @type {Object, number}//number为require的文件
        */
        rightIconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        /**
         * 左侧文字
         * left text
         * @type {string, node}node为text组件
        */
        leftText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        /**
         * 左侧文字样式
         * left icon styles
         * @type {Object}
        */
        leftTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        /**
         * 中间文字
         * center text
         * @type {string, node}node为text组件
        */
        centerText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        /**
         * 中间文字样式
         * center text styles
         * @type {object, number}number为const引入的
        */
        centerTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        /**
         * 右侧文字
         * right text
         * @type {string, node}node为text组件
        */
        rightText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        /**
         * 右侧文字样式
         * right text styles
         * @type {object, number}number为const引入的
        */
        rightTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        /**
         * 整个item点击
         *  the whole item on press
         * @type {Function}
        */
        onPress: PropTypes.func,
        /**
         * 左侧点击
         *  left compoennt on press
         * @type {Function}
        */
        onLeftPress: PropTypes.func,
        /**
         * 右侧点击
         *  right compoennt on press
         * @type {Function}
        */
        onRightPress: PropTypes.func,
        /**
         * 中间点击
         *  center compoennt on press
         * @type {Function}
        */
        onCenterPress: PropTypes.func,
        /**
         * 隐藏左侧组件
         *  hidden left compoennt
         * @type {Boolean}
        */
        hiddenLeft: PropTypes.bool,
        /**
         * 隐藏右侧组件
         *  hidden right compoennt
         * @type {Boolean}
        */
        hiddenRight: PropTypes.bool,
        /**
         * 移除左侧组件
         *  remove left compoennt
         * @type {Boolean}
        */
        removeLeftView: PropTypes.bool,
        /**
         * 移除中间组件
         *  remove center compoennt
         * @type {Boolean}
        */
        removeCenterView: PropTypes.bool,
        /**
         * 移除右侧组件
         *  remove right compoennt
         * @type {Boolean}
        */
        removeRightView: PropTypes.bool,
        /**
         * 隐藏上划线
         *  hidden top line
         * @type {Boolean}
        */
        hiddenTopLine: PropTypes.bool,
        /**
         * 上划线的样式
         *   top line styles
         * @type {Object, number}number为const引入的
        */
        topLineStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        /**
         * 上划线的左边距
         *   top line leftMargin
         * @type {Number}
        */
        topLineLeftMargin: PropTypes.number,
        /**
         * 上划线右侧边距
         *   top line rightMargin
         * @type {Number}
        */
        topLineRightMargin: PropTypes.number,
        /**
         * 隐藏下划线
         *  hidden bottom line
         * @type {Boolean}
        */
        hiddenBottomLine: PropTypes.bool,
        /**
         * 底部下划线的样式
         *   bottom line styles
         * @type {Object, number}number为const引入的
        */
        bottomLineStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),

        /**
         * 底部下划线左侧边距
         *   bottom line leftMargin
         * @type {Number}
        */
        bottomLineLeftMargin: PropTypes.number,
        /**
         * 底部下划线右侧边距
         *   bottom line rightMargin
         * @type {Number}
        */
        bottomLineRightMargin: PropTypes.number,
    }

    static defaultProps = { 
        isRightArrowShow: true,
        hiddenBottomLine: false,
        hiddenTopLine : true,
        hiddenLeft: false,
        hiddenRight:false,
        removeCenterView: false,
        removeLeftView: false,
        removeRightView: false,
        topLineLeftMargin: 0,
        bottomLineLeftMargin: 15
    }

  
    /**
     * 左边内容
     */
     renderLeft = () => {
        let IsTouchComponent = this.props.onLeftPress  ? TouchableOpacity : View;
        if(this.props.hiddenLeft){

            return (
                <IsTouchComponent style={[styles.leftComponentStyle, this.props.leftComponentStyle]} hitSlop={{top:13,bottom: 13, left: 0,right: 0}}  onPress={this.props.onLeftPress}>
                        <View style={{width: barBtnWidth}}/>
                </IsTouchComponent>
            )
        }else{
            return(

                <IsTouchComponent style={[styles.leftComponentStyle, this.props.leftComponentStyle]} hitSlop={{top:13,bottom: 13, left: 0,right: 0}}  onPress={this.props.onLeftPress}>
                {
                    this.props.leftIcon && <Image  style={[styles.leftIconStyle, this.props.leftIconStyle]} source={this.props.leftIcon}/>
                }
                {
                    this.props.leftText &&  <Text  style={[styles.leftTextStyle, this.props.leftTextStyle]}> {this.props.leftText} </Text> 
                }
                </IsTouchComponent>
            )
        }
        
    }

     renderCneter = () => {
        const IsTouchComponent = this.props.onCenterPress  ? TouchableOpacity : View;
        
        return (
          <IsTouchComponent style={[styles.centerContentStyle,{flex: 2}, this.props.centerContentStyle]} onPress={this.props.onCenterPress}>
            <Text style={[styles.centerTextStyle, this.props.centerTextStyle]} >
              { this.props.centerText }
            </Text>
          </IsTouchComponent>
        );
    };
     renderRight = () => {
        if (this.props.hiddenRight) {
            return(
                <View style={{width: barBtnWidth}}/>
            )
        }else{
            let IsTouchComponent = this.props.onRightPress ? TouchableOpacity : View;
            return (
                <IsTouchComponent style={[styles.rightComponentStyle,this.props.rightComponentStyle]} hitSlop={{top:13,bottom: 13, left: 0,right: 16}}  onPress={this.props.onRightPress}>
                    {
                        this.props.rightIcon && <Image  style={[styles.rightIconStyle, this.props.rightIconStyle]} source={this.props.rightIcon}/>
                    }
                    {
                        this.props.rightText &&  <Text style={[styles.rightTextStyle, this.props.rightTextStyle]}>{this.props.rightText}</Text> 
                    }
                    {
                        this.props.isRightArrowShow  && <Image style={[styles.rightArrowStyle, this.props.rightArrowStyle]} source={this.props.rightArrow || require('./rightArrow.png')}/> 
                    }
                </IsTouchComponent>
            )
        }
    }
    render(){
        let IsTouchComponent = this.props.onPress  ? TouchableOpacity : View;
        return (
            <View style={[styles.container, this.props.containerStyle]}>
                {
                    !this.props.hiddenTopLine && <View style={[styles.topLine, {marginLeft:  this.props.topLineLeftMargin, marginRight: this.props.topLineRightMargin}, this.props.topLineStyle]}/>
                }
                <IsTouchComponent style={[styles.contentStyle]} onPress={this.props.onPress}>
                    {!this.props.removeLeftView && (this.props.leftComponent || this.renderLeft())}
                    {!this.props.removeCenterView && (this.props.centerText ? this.renderCneter() : this.props.centerContent) }
                    {!this.props.removeRightView  && (this.props.rightComponent || this.renderRight())}
                </IsTouchComponent>
                {
                    !this.props.hiddenBottomLine && <View style={[styles.bottomLine, {marginLeft:  this.props.bottomLineLeftMargin, marginRight: this.props.bottomLineRightMargin}, this.props.bottomLineStyle]}/>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: dimens.width
    },
    topLine: {
        height: dimens.SEPARATOR_HEIGHT,
        backgroundColor: 'gray',
    },
    bottomLine: {
        height: dimens.SEPARATOR_HEIGHT,
        backgroundColor:  'gray',
    },
    contentStyle:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftComponentStyle: {
        flex:1,
        flexDirection: 'row',
        paddingLeft: 16,
        paddingVertical: 12,
        alignItems:'center',
    },
    leftIconStyle: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 5,
    },
    leftTextStyle: {
        fontSize: dimens.normalize(16),
        color: 'black'
    },
    centerContentStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerTextStyle: {
        fontSize: dimens.normalize(16),
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    rightComponentStyle: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 16,
        paddingVertical: 13,
        alignItems:'center',
    },
    rightIconStyle: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 5,
    },
    rightTextStyle: {
        fontSize: dimens.normalize(16),
        color: 'black'
    },
    rightArrowStyle:{
        width: 8,
        height: 14,
        resizeMode:'contain',
        marginLeft: 5,
    },
});


module.exports = {
    PublicCompoennt,
    dimens
}