import React, { useEffect, useState } from 'react';
import articleService from '../../../../services/article.service';

const EditArticle = (props) => {
    const initState = {
        id: null,
        title: '',
        description: '',
    }

    const [currentArticle, setCurrentArticle] = useState(initState);
    const [message, setMessage] = useState('');

    const getArticle = id => {
        articleService.get(id)
            .then(res => {
                setCurrentArticle(res.data)
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            })
    };

    useEffect(() => {
        getArticle(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentArticle({ ...currentArticle, [name]: value });
    };

    const updateArticle = () => {
        articleService.edit(currentArticle.id, currentArticle)
            .then(res => {
                console.log(res.data);
                setMessage("Article was updated");
            })
            .catch(e => {
                console.log(e);
            })
    }

    return (
        <div>
            {currentArticle ? (
                <div className="edit-form">
                    <h4>Tutorial</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={currentArticle.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                value={currentArticle.description}
                                onChange={handleInputChange}
                            />
                        </div>
                    </form>

                    <button
                        type="submit"
                        className="badge badge-success"
                        onClick={updateArticle}
                    >
                        Update
          </button>
                    <p>{message}</p>
                </div>
            ) : (
                    <div>
                        <br />
                        <p>Please click on a Tutorial...</p>
                    </div>
                )}
        </div>
    );
}

export default EditArticle;