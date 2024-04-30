import {format, formatDistanceToNow} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Comment } from './Comment';
import {Avatar} from './Avatar'
import styles from './Post.module.css'
import { useState } from 'react';

export function Post({author, content, publishedAt}) {

    const [comments, setComments] = useState(['Really cool, eint?'])
    const [newComment, SetNewComment] = useState('')

    const publishedDateFormmated = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelative = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleNewCommentChange() {
        SetNewComment(event.target.value)        
    }

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newComment]);
        SetNewComment('');
    }

    function deleteComment(deleteComment) {        
        setComments(comments.filter(comment => comment != deleteComment));
    }
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar img = {author.avatarUrl}/>
                    <div className={styles.authorinfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormmated} dateTime={publishedAt.toISOString()}>{publishedDateRelative}</time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    switch(line.type) {
                        case "p":
                            return <p key={line.content}>{line.content}</p>
                        case "link":
                            return <p key={line.content}><a href="#">{line.content}</a></p>                            
                    }
                })}               
            </div>

            <form 
                onSubmit={handleCreateNewComment}
                className={styles.comentForm}>
                <strong>Deixe seu comentario</strong>
                <textarea 
                    name="comment"
                    placeholder='Deixe seu comentario'
                    onChange={handleNewCommentChange}
                    value={newComment}                    
                    required
                />
                <div className={styles.footer}>
                    <button type="submit">Publicar</button>
                </div>

            </form>
            <div className={styles.commentList}>
               {comments.map(comment => {
                return (
                    <Comment 
                    key={comment}
                    content = {comment}
                    onDeleteComment = {deleteComment}
                    />
                )
               })}
            </div>
        </article>
    );
}