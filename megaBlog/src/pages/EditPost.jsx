import { useEffect, useState } from "react"
import service from "../appwrite/config"
import { useNavigate, useParams } from "react-router-dom";
import { Container, PostForm } from "../components";

function EditPost() {

    const[post,setPost] = useState([]);
    const{slug} = useParams()
    const navigate = useNavigate()

    useEffect(() =>{
        if(slug){
            service.getPost(slug).then((post) =>{
                if(post){
                    setPost(post)
                }
            })
        }
        else{
            navigate('/')
        }
    },[slug,navigate])


  return post ? <div className="py-8">
    <Container>
        <PostForm post={post} />
    </Container>
  </div> : null;
}

export default EditPost