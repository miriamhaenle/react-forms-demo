import { useEffect, useState } from 'react'

export default function AdminPage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(
      'http://localhost:4000/users?accessToken=RGllQmFja2VuZFdvY2hlbWFjaHRTcGFzcw=='
    )
      .then((data) => data.json())
      .then((users) => users.length > 0 && setUsers(users))
      .catch((error) => console.error(error.message))
  }, [])

  return (
    <div>
      <h2>Admin Page</h2>
      {users.map((user) => (
        <div key={user._id}>
          {user.firstName} {user.lastName} <br />
          {user.email} <br />
          {user.tags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
      ))}
    </div>
  )
}
