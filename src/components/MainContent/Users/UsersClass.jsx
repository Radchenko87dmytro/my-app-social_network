import React from 'react';
import styles from "./users.module.css"
import axios from 'axios';

class UsersClass extends React.Component {

    // constructor(props) {
    // super(props)         
    // }
        
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
                console.log(response.data.items)
            })
    } 
    
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
                console.log(response.data.items)
            })
    }

    render () {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) 

        let pages = [];
        for (let i = 1; i <= pagesCount ; i++) {  //&& i <=20
            pages.push(i);
        }

        return <div className={styles.users}>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && styles.selectedPage}
                                 onClick={(e)=>{this.onPageChanged(p);}}>
                                    {p}
                            </span> //<span> </span>
                })}
                
                
            </div>
        
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