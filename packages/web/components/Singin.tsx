import { useSession, signIn, signOut } from "next-auth/react"
import Button from '@mui/material/Button';

function Singin() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <Button variant="contained" onClick={() => signOut()}>Sign out</Button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <Button variant="contained" onClick={() => signIn()}>Sign in</Button>
    </>
  )
}

export default Singin
