import { useState, useEffect } from 'react';
import UserLogOut from '../../components/UserLogOut/UserLogOut';


export default function OrderHistory({ user, setUser }) {
  console.log('in order history:', user)
  /*--- State --- */
  /*--- Side Effects --- */
  /*--- Event Handlers --- */
  /*--- Rendered UI --- */
  return (
<UserLogOut user={user} setUser={setUser} />
  );
}