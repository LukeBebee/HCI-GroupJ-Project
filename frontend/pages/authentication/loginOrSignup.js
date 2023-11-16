import { useState } from "react";
import Navbar from "../../components/navbar";
import { inter } from "../../utils/fonts";
export default function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        loginUsername: "",
        loginPassword: ""
    });

    const updateForm = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const doRegister = async () => {
        if (formData.password != formData.confirmPassword) {
            alert("Passwords are not the same!");
        }
        try {
            const res = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify({user_name: formData.username, password: formData.password})
            })
            if (!res.ok) {
                throw new Error(res.status.toString());
            }
        } catch (error) {
            console.log(error);
        }
    }

    const doLogin = () => {

    }
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
                            <label>Username</label>
                            <input type="text" name="username" value={formData.username} onChange={updateForm}></input>
                            <label>Password</label>
                            <input type="password" name="password" value={formData.password} onChange={updateForm}></input>
                            <label>Confirm Password</label>
                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={updateForm}></input>
                            
                        </form>
                        <button className={`${inter.className} submitButton`} onClick={doRegister}>
                                Register
                            </button>
                    </section>
                    <section id="Section2">
                        <h2>
                            Log In
                        </h2>
                        <form>
                            <label>Username</label>
                            <input type="text" name="loginUsername" value={formData.loginUsername} onChange={updateForm}></input>
                            <label>Password</label>
                            <input type="password" name="loginPassword" value={formData.loginPassword} onChange={updateForm}></input>
                           
                        </form>
                        <button className={`${inter.className} submitButton`} onClick={doLogin}>
                            Log In
                        </button>
                    </section>
                    
                </div>
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
                    margin-left: 25vw;
                }
                .submitButton {
                    background-color: rgba(39, 93, 56, 1);
                    color: white;
                    font-size: 30px;
                    position: relative;
                    top: 50px;
                    left: calc(25vw - 150px);
                    width: 150px;
                    height: 60px;
                    border-width: 0px;
                    transition: 250ms;
                }
                .submitButton:hover {
                    background-color: rgba(59, 113, 76, 1);
                }
                `
            }
            </style>
        </div>

    );
}