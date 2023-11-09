import Navbar from "../../components/navbar";

export default function Login() {
    return (
        <div>
            <title>Register or Log In</title>
            <Navbar pageName="Register or Log In" homePage={false}/>
            <main>
                <section>
                    <h2>
                        Register
                    </h2>
                </section>
                <section>
                    <h2>
                        Log In
                    </h2>
                </section>
            </main>
        </div>
    );
}