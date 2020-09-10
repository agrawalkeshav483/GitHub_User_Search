import React from 'react'
import {Card,CardBody} from 'reactstrap'

const UserCard= ({user})=>{
    return(
        <Card className='text-center mt-3 mb-4'>
        <img src={user.avatar_url} className='img-thumbnail'/>
        <CardBody>
            <div className='text-primary'> Name: {user.name}</div>
            <div className='text-primary'> Location:{user.location}</div>
            <div className='text-primary'>User Bio: {user.bio}</div>
            <div className='text-primary'>Available for hire: {user.hireable ? 'Yes' : 'NO'}</div>
            <div className='text-primary'>User Company: {user.company}</div>
        </CardBody>
        </Card>
    )
}

export default UserCard