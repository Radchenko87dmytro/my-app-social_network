import React from 'react';
import styles from "./users.module.css"
import axios from 'axios';

const Users = (props) => {

    if (props.users.length === 0) {

      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items)
        console.log(response.data.items)
      })

    //     props.setUsers([
    //   {
    //     id: 1,
    //     photoUrl:
    //       "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    //     followed: false,
    //     fullName: "Dmytro",
    //     status: "I am a boss",
    //     location: { city: "Opole", country: "Poland" },
    //   },
    //   {
    //     id: 2,
    //     photoUrl:
    //       "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    //     followed: true,
    //     fullName: "ALex",
    //     status: "I am a boss too",
    //     location: { city: "Berlin", country: "Deutschland" },
    //   },
    //   {
    //     id: 3,
    //     photoUrl:
    //       "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    //     followed: false,
    //     fullName: "Den",
    //     status: "I am a boss too",
    //     location: { city: "München", country: "Deutschland" },
    //   },
    // ]);
  
}  

    return <div>
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