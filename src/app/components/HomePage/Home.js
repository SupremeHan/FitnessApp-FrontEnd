import React, { useState, useEffect } from 'react';
import Navbar from '../HomePage/Navbar';
import { ArticleService } from '../../services';


function Home() {
    const [data, setData] = useState([]);

    const photo = "http://localhost:3000/assets/photos/";

    useEffect(() => {
        ArticleService.getAll()
            .then(res => {
                setData(res.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Navbar />
            {data.map(item => (
                <div key={item.articleId}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <img src={photo + item.imageUrl} alt="slika" />
                </div>
            ))}
        </div>
    )
}

export default Home;