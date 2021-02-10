import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

//A página home também funciona com SSR - Side Server Rendering
const Home = (props) => {
    return (
        <div class="bg-dark p-5"  >
        <div className="container border mt-3 bg-success text-white rounded" >
            
    <Jumbotron fluid>
        <h2 >
            <b>Seja bem vindo (a)!</b>
        </h2>
        <p>
            Essa página também funciona com <em><strong>SSR - Side Server Rendering</strong></em>!
        </p>
    </Jumbotron>
    </div>
    </div>
    
  
    )
}

export default Home
