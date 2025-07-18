const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', backgroundColor: '#f0f0f0' }}>
           <h2 style={{color: 'blue', fontSize: '24px'}}>{props.name}</h2>
           <p style={{ fontWeight: 'bold', color: '#333'}}>Age: <span> {props.age} </span></p>
           <p>Bio <span style={{ fontStyle: 'italic', color: '#555'}}>{props.bio}</span></p> 
        </div>
    )
} 

export default UserProfile;