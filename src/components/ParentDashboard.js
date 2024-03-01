import React from 'react';
import Navbar from './Navbar'
import ParentStatistics from './ParentStatistics';


const ParentDashboard = () => {

   
    
        return (
            <div className='body'>
                <Navbar />
                <div className='jumbotron jumbotron'>
                    <div className='container'>
                        <h1 className='display-4' text-align="center">Welcome Amb!</h1>
                        {/* <p className='lead'>Let's see if we can get this to work!</p> */}
                        <ParentStatistics />  
                        {/* <button className='btn btn-danger' type='button' onClick={onLogout}>Logout</button>  */}
                    </div>
                </div>  
                    
            </div>
        )
    }
 export default ParentDashboard;