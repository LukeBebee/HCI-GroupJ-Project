import Navbar from "../../components/navbar";
import { inter, leagueGothic } from "../../utils/fonts";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";



export default function UserProfile() {
  const router = useRouter();
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
        localStorage.setItem("userId", "");
        router.back();
        console.log(error);
      }
    }
    fetchData();
  }, []) // run only on the first render

  const isAchievementVisible = userData.points > 0;

  return (
    <div>
      <Navbar pageName="User Profile" homePage={false} userPages={true} />
      <main id="myBody">
        <h2 className={inter.className}>Hello, {userData.user_name}!</h2>
        <div className={`pointsCounter ${leagueGothic.className}`}>
          You have {userData.points} points
        </div>
        <h2>Achievements</h2>
        {/* Achievement Display */}
        {isAchievementVisible && (
          <div className="achievementContainer">
            <Image 
                src="/images/news.jpg"
                width={50}
                height={50}
                alt="News Novice"
            />            <div className="achievementDetails">
              <h3>News Novice</h3>
              <p>Read your first news article and complete your first quiz</p>
            </div>
          </div>
        )}
        {!isAchievementVisible && (
          <div className="achievementContainer">
            <Image 
                src="/images/news.jpg"
                width={50}
                height={50}
                alt="News Novice"
            />
            <div className="achievementDetails">
              <h3>???</h3>
              <p>Read your first news article and complete your first quiz</p>
            </div>
          </div>
        )}
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
              font-size: 70px;
              color: #B16A00;
            }

            .achievementContainer {
              display: flex;
              align-items: center;
              margin-top: 20px;
            }

            .achievementContainer img {
              width: 100px; /* Adjust as needed */
              height: 100px; /* Adjust as needed */
              margin-right: 20px;
              opacity: ${isAchievementVisible ? 1 : 0.3};
              transition: opacity 0.5s ease-in-out;
            }

            .achievementDetails {
              opacity: ${isAchievementVisible ? 1 : 0.3};
              transition: opacity 0.5s ease-in-out;
            }

            .achievementDetails h3 {
              font-size: 24px;
            }

            .achievementDetails p {
              font-size: 16px;
            }
          `
        }
      </style>
    </div>
  )
}
