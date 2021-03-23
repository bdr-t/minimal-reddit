const UserProfile = ({match}) =>{

    return(
        <div>{match.params.user}</div>
    )

}

export default UserProfile;