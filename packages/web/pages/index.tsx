// import Button from "@mui/material/Button";
import { useUser } from "@auth0/nextjs-auth0";

// import Singin from "../components/Singin";

function HomePage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
  // return (
  //   <div className="content">
  //     <Button variant="contained">Hello World</Button>
  //     <Singin/>
  //   </div>
  // );
}

export default HomePage;
