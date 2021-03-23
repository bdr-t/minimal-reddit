const UserProfile = ({match}) =>{
    console.log(match)
    return(
        <div>{match.params.user}</div>
    )

}

export default UserProfile;