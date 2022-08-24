import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from "react-router-dom"

import { storage, db } from '../../firebaseStore';
import {Button, Form, Grid, Loader} from "semantic-ui-react"

import "./userForm.scss"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const initialState = {
    name:"",
    email:"",
    info:"",
    contact:"",
    status:"",
}


const UserForm = () => {
    const [data, setData] = useState(initialState);

    const {name, email, info, contact, status} = data

    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{

        const uploadFile = () =>{
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_changed", (snapshot)=>{
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);

                switch(snapshot.state){
                    case "paused":
                        console.log("Upload is Paused");
                        break;
                    case "running":
                        console.log("Uploading...")
                        break;
                    default:
                        break;
                }

            }, (error) =>{
                console.log(error)
            },

            () =>{getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
                setData((prev)=>({...prev, img:downloadURL}))
            })
            });
        }
        file && uploadFile()
    },[file])


    const handleChange = (e) =>{
        setData({...data, [e.target.name]:e.target.value})
    }
    const validate = () =>{
        let errors = {};
        if(!name){
            errors.name = "Name is Required"
        }
        if(!email){
            errors.email = "email is Required"
        }
        if(!info){
            errors.info = "info is Required"
        }
        if(!contact){
            errors.contact = "contact is Required"
        }
        if(!status){
            errors.status = "status is Required"
        }
        return errors;

    } 
    const handleSubmit = async (e) =>{
        e.preventDefault();
        let errors = validate();
        if(Object.keys(errors).length) return setErrors(errors)
        
        setIsSubmit(true);
        await addDoc(collection(db, "users"),{...data, timestamp: serverTimestamp()})
        navigate("/") 
    }

  return (
    <div className="user__form">
        <Grid colums="3">
            <Grid.Row>
                <Grid.Column>
                    <div className="formBody">
                        {isSubmit ? <Loader active inline="centered" size="huge"/>:(
                            <>
                             <h3 className="title">Add New User</h3>
                             <Form className="form" onSubmit={handleSubmit}>
                                <Form.Input 
                                            placeholder="Your Name"
                                            name="name"
                                            className="formInput"
                                            onChange={handleChange}
                                            value={name}
                                            error={errors.name ? {content:errors.name}:null}
                                            atuoFocus/>
                                
                                <Form.Input 
                                            placeholder="Your Email"
                                            name="email"
                                            error={errors.email ? {content:errors.email}:null}
                                            className="formInput"
                                            onChange={handleChange}
                                            value={email}/>

                                <Form.TextArea 
                                            placeholder="Your Info"
                                            name="info"
                                            className="formInput"
                                            error={errors.info ? {content:errors.info}:null}info
                                            onChange={handleChange}
                                            value={info}/>
                                <Form.Input 
                                            placeholder="Contacts"
                                            name="contact"
                                            className="formInput"
                                            error={errors.contact ? {content:errors.contact}:null}
                                            onChange={handleChange}
                                            value={contact}/>
                                <Form.Input 
                                            placeholder="status"
                                            name="status"
                                            className="formInput"
                                            error={errors.status ? {content:errors.status}:null}
                                            onChange={handleChange}
                                            value={status}/>
                                <Form.Input
                                            type="file"
                                            onChange={(e)=>setFile(e.target.files[0])}/>
                             <Button type="submit"
                             disabled={progress!==null && progress<100}>Submit</Button>
                             </Form>
                            </>
                        )}
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>

    </div>
    
  )
}

export default UserForm
