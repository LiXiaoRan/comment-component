import React, { Component } from "react";
import PropTypes from 'prop-types'

class Comment extends Component {
    //验证props的类型,必须为object
    static propTypes={
        comment:PropTypes.object.isRequired //isRequired是强制这个组件必须传入这个参数，在没设置defaultProps的情况下
    }

    render() {
        return (
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.comment.username}</span>：
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        );
    }
}

export default Comment
