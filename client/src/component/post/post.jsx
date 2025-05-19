
import "./post.css"

const Post = (props) => {
    return (
    <article>
        <div className='head'>
            <h3>{ props.username }</h3>
            <span>{props.date}</span>
        </div>
        <p>
            <h2>{ props.title }</h2>
            { props.desc }
        </p>
        <div className="react">
            <span>like</span>
            <span>commet</span>
            <span>share</span>
        </div>
    </article>
    )
}

export default Post
