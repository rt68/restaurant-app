import UserLogOut from '../../components/UserLogOut/UserLogOut';
//components
export default function NewOrder({ user, setUser }) {
  console.log('In New Order', user)

  return(
    <UserLogOut user={user} setUser={setUser} />
  )
}