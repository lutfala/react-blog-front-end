//axios is like a fetch but with more web browser compatibility

import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams} from 'react-router-dom'
import { Card, Container} from 'react-bootstrap'

const PostPage = () => {
    const [post, setPost] = useState({
        title:'',
        author:'',
        image:'',
        content:''
    })
//useparams is refered to things that are passed in - api
    const {id} = useParams()
//useeffect performs something once. And then again once the requirements are met. hit api once not again 
    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`http://localhost:3000/posts/${id}`)
            setPost(res.data)
        }
        fetchPost()
    }, [id])

    return(
        <Container className='mt-4'>
            <Card>
                <div style={{maxHeight: '500px', overflow:'hidden'}}>
                    <Card.Img className='img-fluid' variant='top' src={post.image} alt={post.title}> </Card.Img>
                    </div>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>By: {post.author}</Card.Subtitle>
                        <Card.Text>{post.content}</Card.Text>
                    </Card.Body>
            </Card>
        </Container>

    )
}

export default PostPage;