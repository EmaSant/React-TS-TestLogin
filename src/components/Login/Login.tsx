//Importing necessary libraries.
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { emailRegex, passwordRegex } from "../../utils/ValidationRegex";
import { api } from "../../services/Api";
import axios from "axios";
import { Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  setAuthStatus,
  setEmail,
  setError,
  setIsLoading,
  setPassword,
} from "../../redux/loginSlice/loginSlice";

//Initializing Component
function Login() {
  //Declaring state variables with initial value of an empty string.

  //OLD USE STATE changed with redux
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  //const [error, setError] = useState("");
  //const [isLoading, setIsLoading] = useState(false);
  //const [authStatus, setAuthStatus] = useState("");

  const email = useSelector((state: RootState) => state.loginInfo.email);
  const password = useSelector((state: RootState) => state.loginInfo.password);
  const error = useSelector((state: RootState) => state.loginInfo.error);
  const isLoading = useSelector(
    (state: RootState) => state.loginInfo.isLoading
  );
  const authStatus = useSelector(
    (state: RootState) => state.loginInfo.authStatus
  );

  const dispatch = useDispatch();

  //Handler for form submit of user login info.
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic reset Error each try
    dispatch(setError(""));

    //console.log(email, password);
    //Go forward only if entered email and password pass the Regex Test
    if (emailRegex.test(email) && passwordRegex.test(password)) {
      dispatch(setIsLoading(true));
      try {
        const response = await axios.post(api, {
          email,
          password,
        });

        // Store token using localStorage
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        dispatch(setAuthStatus(response.data.access_token));

        //console.log(response.data);
      } catch (err) {
        dispatch(setError("Invalid credentials or server error"));
      } finally {
        dispatch(setIsLoading(false));
      }
    }
  };

  //Avoid login page if token is actually stored
  if (localStorage.getItem("access_token") || authStatus) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    //Empty brackets allowing component to use React.Fragment for returning multiple JSX elements.
    //HTML element use classNames from Bootstrap library
    <>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col xs={12} md={6}>
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                  isValid={emailRegex.test(email)}
                  isInvalid={email != "" && !emailRegex.test(email)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => dispatch(setPassword(e.target.value))}
                  isValid={passwordRegex.test(password)}
                  isInvalid={password != "" && !passwordRegex.test(password)}
                />
                <Form.Control.Feedback type="invalid">
                  Password must be at least 8 characters long and contain at
                  least one letter and one digit.
                </Form.Control.Feedback>
              </Form.Group>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Button
                variant="primary"
                type="submit"
                className="w-100"
                disabled={isLoading}
              >
                {isLoading ? "Logging in" : "Login"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
