import { useState } from "react";
import styles from "./SignInRoute.module.css";
import AuthForm from "../components/AuthForm";
import { signIn } from "../lib/api";
import { useNavigate, Link } from "react-router-dom";
 
function SignInRoute() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
 
  const handleSignIn = async (values) => {
    setError(null);
    try {
      await signIn(values);
      navigate("/");
    } catch (e) {
      console.error(e);
      setError("Login fehlgeschlagen. Bitte Daten prüfen.");
    }
  };
 
  return (
    <div className={styles.container}>
      <AuthForm mode="signin" onSubmit={handleSignIn} error={error} />
      <p className={styles.switch}>
        Noch kein Account? <Link to="/signup">Registrieren</Link>
      </p>
    </div>
  );
}
 
export default SignInRoute;