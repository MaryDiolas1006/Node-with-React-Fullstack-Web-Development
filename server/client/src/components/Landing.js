import React from 'react';


const Landing = () => {
    return (
        <div className = "ui container " style = {{ teaxtAlign: 'center' }}>
            <h1>Welcome to My Page</h1>
            <iframe width="560" height="315"
             src="https://www.youtube.com/embed/-8JQB_wXjmk" 
             frameborder="0" allow="accelerometer; autoplay;
              encrypted-media; gyroscope; picture-in-picture"
               allowfullscreen></iframe>
        </div>
    )
}


export default Landing;