import Navbar from "../../components/navbar";
import { inter } from "../../utils/fonts";
export default function Login() {
    return (
        <div className={inter.className}>
            <title>Register or Log In</title>
            <Navbar pageName="Register or Log In" homePage={false}/>
            <main>
                <div className="loginSplit">
                    <section id="Section1">
                        <h2>
                            Register
                        </h2>
                        <form>
                            <label for="Username">Username</label>
                            <input type="text" id="Username" name="Username"></input>
                            <label for="Password">Password</label>
                            <input type="password" id="Password" name="Password"></input>
                            <label for="ConfirmPassword">Confirm Password</label>
                            <input type="password" id="ConfirmPassword" name="ConfirmPassword"></input>
                        </form>
                    </section>
                    <section id="Section2">
                        <h2>
                            Log In
                        </h2>
                        <form>
                            <label for="Username">Username</label>
                            <input type="text" id="Username" name="Username"></input>
                            <label for="Password">Password</label>
                            <input type="password" id="Password" name="Password"></input>
                           
                        </form>
                    </section>
                    
                </div>
                <button className={inter.className} id="submitButton">
                        Submit
                </button>
            </main>
            <style jsx>{
            `
                .loginSplit {
                    display: flex;
                    flex-direction: row;
                    width: 100%;

                }
                form {
                    display: flex;
                    flex-direction: column;
                }
                form label {
                    font-size: 20px;
                    margin-top: 7px;
                    margin-bottom: 7px;
                }
                form input {
                    width: 25vw;
                    height: 65px;
                    border-radius: 20px;
                    border-color: rgba(0,0,0, 0.5);
                }
                h2 {
                    font-size: 50px;
                    font-weight: 200;
                }
                #Section1 {
                    margin-left: 30px;
                    
                }
                #Section2 {
                    margin-left: 20vw;
                }
                #submitButton {
                    background-color: rgba(39, 93, 56, 1);
                    color: white;
                    font-size: 30px;
                    position: absolute;
                    right: 100px;
                    width: 150px;
                    height: 60px;
                    border-width: 0px;
                    transition: 250ms;
                }
                #submitButton:hover {
                    background-color: rgba(59, 113, 76, 1);
                }
                `
            }
            </style>
        </div>

    );
}