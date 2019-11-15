import React ,{Component} from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
    constructor() {
        super();
        this.state={
            comments:[]
        }
    }
    

    handleSubmitComment(comment,e){
        // 获取并更新评论数据
        if (!comment) {
            return;
        }
        if (!comment.username) {
            return alert("请输入用户名");
        }
        if (!comment.content) {
            return alert("请输入评论内容");
        }
        this.setState((state) => { return state.comments.push(comment) })
        
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput 
                    onSubmit={this.handleSubmitComment.bind(this)}
                />
                <CommentList comments={this.state.comments}/>
            </div>
        );
    }
}

export default CommentApp