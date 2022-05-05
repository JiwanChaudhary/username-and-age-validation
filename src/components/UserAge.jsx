import React from 'react'
import { Wrapper, Form, Username, UsernameInput, Age, AgeInput, AddUser } from './UserAge.styled'

const UserAge = () => {
  return (
      <Wrapper>
          <Form>
                <Username htmlFor='user'>Username</Username>
                <UsernameInput id='user' />
                <Age htmlFor='age'>Age</Age>
                <AgeInput id='age'/>
                <AddUser>Add User</AddUser>
          </Form>
      </Wrapper>
    
  )
}

export default UserAge