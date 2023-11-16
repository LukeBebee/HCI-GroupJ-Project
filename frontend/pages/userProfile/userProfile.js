import Navbar from "../../components/navbar";
import { inter, leagueGothic } from "../../utils/fonts";
import { useState, useEffect } from 'react';

export default function userProfile() {
    const [userData, setUserData] = useState({
        user_name: "",
        points: 0
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`/api/userData/${localStorage.getItem('userId')}`, {
                    method: 'GET'
                })
                if (!res.ok) {
                    throw new Error(res.status.toString());
                }
                const data = await res.json();
                console.log(data);
                setUserData(data.data);
                
            } catch (error) {
                alert("Error occurred while finding user!")
                console.log(error);
            }
        }
        fetchData();
    }, []) // run only on first render
    return (
        <div>
            <Navbar pageName="User Profile" homePage={false}/>
            <main id="myBody">
                <h2 className={inter.className}>Hello, {userData.user_name}!</h2>
                <div className={`pointsCounter ${leagueGothic.className}`}>
                    You have {userData.points} points
                </div>
            </main>
            <style jsx>
            {
                `   
                    #myBody {
                        margin-left: 32px;
                        margin-right: 32px;
                    }
                    h2 {
                        font-size: 50px;
                    }
                    .pointsCounter {
                        font-size: 100px;
                        color: #B16A00;
                    }
                `
            }
            </style>
        </div>
    )
}