export default function User({ firstName, lastName }) {
  return (
    <section>
      <h4>Welcome {firstName}</h4>
      <p>
        Your successfully registered a new user with {firstName} {lastName}
      </p>
    </section>
  )
}
