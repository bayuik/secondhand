import { Col, Row, Form, Image } from "react-bootstrap";
import { NavbarStandard } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import React from "react";
import ImageUploading from 'react-images-uploading';

import{io} from 'socket.io-client';

const InputProduct = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState("");
    const [socket, setSocket] = useState(null)

    useEffect(() =>{
        setSocket(io("http://localhost:5000"));
    },[])
    useEffect(() =>{
      socket?.emit("newUser", user);
  },[socket, user])

  return (
    <div>
    Test
    <br/>
    <input type="text"/>
    <button>Masukan</button>
    </div>

  );
};

export default InputProduct;
