import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import News from '../News/News';

const Newes = () => {
    const [newses, setNews] = useState([])

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=e7ff91aa496a481593893b4391b6239e")
            .then(res => res.json())
            .then(data => setNews(data.articles))
    }, [])
    return (
        <div className="container">
            <h2>Total Artical length : {newses.length}</h2>
            {
                newses.length ===0 ? 
                <Spinner animation="border" variant="primary"  className="d-flex justify-content-center"/>
                :
            
            <Row xs={1} md={3} className="g-4">
                {
                    newses.map(news => <News news={news} key={news.url}></News>)
                }
            </Row>
}
        </div>
    );
};

export default Newes;