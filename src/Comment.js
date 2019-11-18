import React, { Component } from "react";
import PropTypes from 'prop-types'

class Comment extends Component {
    //验证props的类型,必须为object
    static propTypes={
        comment:PropTypes.object.isRequired //isRequired是强制这个组件必须传入这个参数，在没设置defaultProps的情况下
    }

    componentWillMount(){
        this._updateTimeString();
        this._timer=setInterval(() => {
            this._updateTimeString();
        }, 5000);

        // this._timer = setInterval(this._updateTimeString.bind(this),5000)
    }

    _updateTimeString(){
        //更新评论的时间显示
        let comment=this.props.comment;
        let duration=(+Date.now()-comment.createdTime)/1000;
        this.setState({
            timeString:duration>60?`${Math.round(duration/60)}分钟前`:`${Math.max(duration,1) }秒前`
        })
    }

    render() {
        return (
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.comment.username}</span>：
                </div>
                <p>{this.props.comment.content}</p>
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
            </div>
        );
    }

    componentWillUnmount(){
        if (this._timer) {
            clearInterval(this._timer)
        }
    }
}

export default Comment
