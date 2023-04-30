import React from 'react';
import styles from "./users.module.css"
import axios from 'axios';

class UsersClass extends React.Component {

    constructor(props) {
    super(props)
    //alert("new")    
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
                console.log(response.data.items)
            })
                
    }
        
        


    render () {
        return <div className={styles.users}>
        
            {
                this.props.users.map(u => <div key ={u.id}> 
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                 ? <button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button> 
                                 : <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}
                            
                        </div>
                    </span>
                    <span>
                        <span>
                           <div>{u.name}</div>
                           <div>{u.status}</div>   
                        </span>
                        <span>
                           <div>{"u.location.country"}</div>
                           <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
           }
        </div>
    }


    

      

    
}

export default UsersClass