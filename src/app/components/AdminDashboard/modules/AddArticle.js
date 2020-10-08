import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { ArticleService } from '../../../services';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const AddArticle = () => {
    const initalArticleState = {
        id: null,
        title: '',
        description: '',
    }
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const [article, setArticle] = useState(initalArticleState);
    const [submitted, setSubmitted] = useState(false);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const handleInputChange = event => {
        const { name, value } = event.target;
        setArticle({ ...article, [name]: value });
    };

    const saveArticle = () => {
        var data = {
            title: article.title,
            description: article.description
        };

        ArticleService.create(data).then(res => {
            setArticle({
                id: res.data.id,
                title: res.data.title,
                description: res.data.description
            });
            setSubmitted(true);
            console.log(res.data);
        })
            .catch(e => {
                console.log(e)
            })
    }

    const newArticle = () => {
        setArticle(initalArticleState);
        setSubmitted(false);
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={handleOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className="submit-form">
                            {submitted ? (
                                <div>
                                    <h4>You submitted successfully!</h4>
                                    <button className="btn btn-success" onClick={newArticle}>
                                        Add
                                    </button>
                                </div>
                            ) : (
                                    <div>
                                        <div className="form-group">
                                            <label htmlFor="title">Title</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                required
                                                value={article.title}
                                                onChange={handleInputChange}
                                                name="title"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="description">Description</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="description"
                                                required
                                                value={article.description}
                                                onChange={handleInputChange}
                                                name="description"
                                            />
                                        </div>

                                        <button onClick={saveArticle} className="btn btn-success">
                                            Submit
          </button>
                                    </div>
                                )}
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default AddArticle;