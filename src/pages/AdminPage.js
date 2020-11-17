import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'
import Form from '../components/Form'

export default function AdminPage() {
  const [users, setUsers] = useState([])
  const { path } = useRouteMatch()

  useEffect(() => {
    fetch(
      'http://localhost:4000/users?accessToken=RGllQmFja2VuZFdvY2hlbWFjaHRTcGFzcw=='
    )
      .then((data) => data.json())
      .then((users) => users.length > 0 && setUsers(users))
      .catch((error) => console.error(error.message))
  }, [])

  return (
    <Page>
      <Switch>
        <Route exact path={path}>
          <h2>Admin Page</h2>
          {users.map((user) => (
            <Card key={user._id}>
              <Edit to={`/admin/users/${user._id}`}>✏️</Edit>
              {user.firstName} {user.lastName} <br />
              {user.email} <br />
              {user.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </Card>
          ))}
        </Route>
        <Route path={`${path}/:userId`}>
          <EditForm />
        </Route>
      </Switch>
    </Page>
  )
}

function EditForm() {
  const { userId } = useParams()
  return (
    <Form
      title="Edit User"
      buttonText="Save"
      submitAction="updateUser"
      userId={userId}
    />
  )
}

const Page = styled.div`
  font-family: sans-serif;
  color: #000;

  h2 {
    text-align: center;
  }
`

const Card = styled.div`
  background: lightblue;
  border-radius: 3px;
  box-shadow: 2px 2px 4px #999;
  color: darkblue;
  margin: 1rem;
  padding: 0.5rem;
  position: relative;

  span {
    background: deepskyblue;
    border-radius: 3px;
    color: ivory;
    display: inline-block;
    padding: 0.2rem;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
  }
`
const Edit = styled(Link)`
  background: lightblue;
  justify-self: right;
  position: absolute;
  right: 10px;
  top: 5px;
  text-decoration: none;
`
