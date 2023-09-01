import Authenticate from "./components/Authenticate"
import SignUpForm from "./components/SignUpForm"
import { useState } from "react"

export default function App() {

  const [token, setToken] = useState(null);

  return(
    <div className="center">
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </div>
  );
}
