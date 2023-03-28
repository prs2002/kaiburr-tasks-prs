import React, { useEffect } from "react";
import { Button, Container } from "reactstrap";

const Home=() =>{
    useEffect(()=>{
        document.title = "Home";
    },[])
    return(
        <div>
            
                <h1 className="display-5">Welcome to the Cars Application.</h1>
                <p class="lead">This is a basic Application built for kaiburr task using React for the frontend
                        and springboot for backend. </p>
                <hr class="my-4"></hr>
                <Container>
                    <Button color="primary" >
                        Start Using
                    </Button>
                </Container>
            
        </div>
    )
}

export default Home;