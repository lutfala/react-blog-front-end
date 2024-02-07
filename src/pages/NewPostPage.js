//axios is like a fetch but with more web browser compatibility

import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import { Form, Button, Container, FormGroup } from 'react-bootstrap'


/*2 things need to happen here:
1.route back to the homepage
2.request is sent to the api and to the correct controller and submit it to the database
It's like building controller within react
*/

const NewPostPage = () => {
//State. how the form is going to look like:
    const [post, setPost] = useState({
        title:'',
        author:'',
        image:'',
        content:''
    })
//call use navigate to send people from page to page. hits the router "import" right above, that listen to traffic make call to that router and send people from page to page
    const navigate = useNavigate()

    //smurf - event listener below for any key press in a form box
    const handleChange = e => {
        setPost({...post, [e.target.name]: e.target.value })

    }



    const handleSubmit = async e => {
        //taking over the standard behaviour; 'e = event' means the clicking (interaction)
        e.preventDefault()
        await axios.post(`http://localhost:3000/posts`, post)
        navigate('/')
    }

    //everything visually displayed is going into 'return':
    return(
        //bootstrap react component
        <Container className= 'mt-4'>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' name='title' placeholder="Title" onChange={handleChange}/>
                </FormGroup>

                 <FormGroup>
                 <Form.Label>Author</Form.Label>
                 <Form.Control type='text' name='author' placeholder="Author" onChange={handleChange}/>
                </FormGroup>

                <FormGroup>
                <Form.Label>Image URL</Form.Label>
                <Form.Control type='text' name='image' placeholder="Image URL" onChange={handleChange}/>
                </FormGroup>

                <FormGroup>
                <Form.Label>Content</Form.Label>
                <Form.Control as='textarea' rows={5} name='content' placeholder="Content" onChange={handleChange}required/>
                </FormGroup>

                <Button variant='primary' type='submit'>
                    Create
                </Button>
            </Form>

        </Container>
        
    )
}

export default NewPostPage;
