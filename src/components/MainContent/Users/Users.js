import React from 'react';
import styles from "./users.module.css"
import axios from 'axios';

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currrentPage}&count=${this.props.pageSize}`).then(response => {
                props.setUsers(response.data.items)
                    console.log(response.data.items)
                })
            }
        }

      

    return <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div key ={u.id}> 
                     <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                 ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> 
                                 : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                            
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
};

export default Users;