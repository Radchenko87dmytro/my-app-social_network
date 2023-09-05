import React from 'react';
import styles from "./users.module.css"


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) 

        let pages = [];
        for (let i = 1; i <= pagesCount ; i++) {  //&& i <=20
            pages.push(i);
        }
      
    return <div className={styles.users}>     
    <div>
        {pages.map(p => {
            return <span className={props.currentPage === p && styles.selectedPage}
                         onClick={(e)=>{props.onPageChanged(p);}}>
                            {p}
                    </span> //<span> </span>
        })}
    </div>

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