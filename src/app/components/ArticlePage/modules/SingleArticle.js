import React, { useEffect, useState } from 'react';
import { ArticleService } from '../../../services';

const SingleArticle = (props) => {

    const [article, setArticle] = useState('');
    const {id} = props.match.params;

    useEffect(() => {
        ArticleService.get(id).then(res => {
            setArticle(res.data)
        })
    }, [])

    return(
        <div>
            {article.title}
            {article.description}
        </div>
    )
}
export default SingleArticle;