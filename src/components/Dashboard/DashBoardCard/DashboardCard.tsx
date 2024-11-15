import { Card, Button } from "react-bootstrap";

//Props interface for storing info taken from mock API
interface DashBoardCardProps {
  user: string;
  email: string;
  imageUrl: string;
}

//DashboardCard Initialization
const DashboardCard = (props: DashBoardCardProps) => {
  //Function Handler for logout button that removes jwt access and refresh token from local storage.
  const logoutHandler = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.reload();
  };

  //Simple card user info using react bootstrap template.
  return (
    <>
      <Card className="text-center">
        <Card.Header>User Info</Card.Header>
        <Card.Body>
          <Card.Title>Nome: {props.user}</Card.Title>
          <Card.Text>Email: {props.email}</Card.Text>
          <Button onClick={logoutHandler} variant="primary">
            Logout
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">React TS TEST</Card.Footer>
      </Card>
    </>
  );
};

export default DashboardCard;
