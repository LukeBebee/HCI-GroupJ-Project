import React, { useState } from "react";
import Navbar from '../../components/navbar';
import Head from 'next/head';
import { inter } from '../../utils/fonts';


// Example function to update user status in the database
const updateUserStatus = async () => {
    // Implement the logic to update the user's status in your database
    // This could involve making a request to your server or using a client-side SDK
    console.log("Updating user status in the database...");

    

    // Example: Using fetch to make a POST request to your server
    // Replace this with the actual logic for your database update
    // await fetch('/api/updateUserStatus', { method: 'POST' });
  };

export default function News() {
    const loggedIn = false;


  // State to store user responses and correctness
  const [responses, setResponses] = useState([]);
// State to track whether the user has clicked "Done"
const [doneClicked, setDoneClicked] = useState(false);
  // Function to handle user responses
  const handleResponse = (questionIndex, selectedOption) => {
    // Check if the selected option is correct (you can implement your logic here)
    const isCorrect = selectedOption === "optionB"; // Assuming "optionB" is the correct option

    // Update the responses state
    setResponses(prevResponses => {
      const newResponses = [...prevResponses];
      newResponses[questionIndex] = { isCorrect, selectedOption };
      return newResponses;
    });
  };

  // Function to handle "Done" button click
  const handleDoneClick = async () => {
    // Assuming some condition (e.g., all questions are answered)
    // setQuizCompleted(true);

    // Update the user's status in the database
    try {
      await updateUserStatus();
      setDoneClicked(true);
      console.log("User status updated successfully.");
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

  // Function to get the background color for the buttons
  const getButtonColor = (index, option) => {
    const response = responses[index];
    if (response) {
      if (response.isCorrect) {
        return option === response.selectedOption ? "green" : "";
      } else {
        return option === response.selectedOption ? "red" : "";
      }
    }
    return "";
  };

  // Function to get the feedback color
  const getFeedbackColor = (index) => {
    const response = responses[index];
    return response && response.isCorrect ? "green" : "red";
  };

  return (
    <div className={inter.className}>
      <Navbar pageName={`News`} homePage={false} />
      <Head>
        <title>News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="newsContainer">
          {/* Left side: News Story */}
          <div className="newsStory">
            <h1>Notice – Intention to Withdraw Authorization: Quartiers Montréal</h1>
            <h3>26 May 2023</h3>
            <p>
              {/* Your news story content */}
              The Chief Electoral Officer is proposing to withdraw the authorization of the municipal political party Quartiers Montréal, pursuant to section 404 of the Act respecting elections and referendums in municipalities (CQLR, c. E‑2.2), for the following reason:
                <ul>
                    <li>failure to submit, by April 1, 2023, a list indicating the names and addresses of the minimum number of party members prescribed in the third paragraph of section 397, to meet the requirements of section 399.2.
                    </li>
                </ul>
            <br/>If you wish to make any comments or arguments regarding the withdrawal of this party’s authorization, you must submit them in writing no later than 4:30 p.m. on June 9, 2023, by e-mail, at repaq@electionsquebec.qc.ca, or by mail, at the following address:
            <br/>
            <br/>Élections Québec
            <br/>Direction du financement politique et des affaires juridiques
            <br/>Service du Registre, de la coordination et de la gestion des contributions politiques
            <br/>1045, avenue Wilfrid-Pelletier, bureau 200
            <br/>Québec (Québec)  G1W 0C6
            <br/>
            <br/>Subject to any comments or arguments that the party concerned by this notice or other individuals or groups may make or put forward by June 9, 2023, the authorization of the municipal political party Quartiers Montréal will be withdrawn.
            <br/>
            <br/>Given in Québec, on May 25, 2023
            <br/>
            <br/>Jean-François Blanchet
            <br/>Chief Electoral Officer






            </p>
          </div>
          {/* Right side: Quiz */}
          <div className="quizContainer">
            {/* Question 1 */}
            <div className="questionContainer">
              <h3>Question 1</h3>
              Why might Quartiers Montréal lose their authorization as a municipal political party?
              {/* Options stacked vertically */}
              <div className="optionsContainer">
                <button
                  onClick={() => handleResponse(0, "optionA")}
                  style={{ backgroundColor: getButtonColor(0, "optionA") }}
                >
                  They did not earn enough votes from members of their own party in the last relevant election.
                </button>
                <button
                  onClick={() => handleResponse(0, "optionB")}
                  style={{ backgroundColor: getButtonColor(0, "optionB") }}
                >
                  They failed to submit a list indicating names and addresses of the minimum number of party members.
                </button>
                <button
                  onClick={() => handleResponse(0, "optionC")}
                  style={{ backgroundColor: getButtonColor(0, "optionC") }}
                >
                  Quartiers Montréal did not submit necessary documents for members of their party elected into office.
                </button>
              </div>
              {/* Display correctness feedback */}
              {responses.length > 0 && (
                <p className={`feedback ${getFeedbackColor(0)}`}>
                  {responses[0]?.isCorrect ? <b>Correct!</b> : <b>Incorrect!</b>}
                </p>
              )}
            </div>

            {/* Question 2 */}
            <div className="questionContainer">
                <h3>Question 2</h3>
              When will Quartiers Montréal lose authorization by if no action is taken?
              {/* Options stacked vertically */}
              <div className="optionsContainer">
                <button
                  onClick={() => handleResponse(1, "optionA")}
                  style={{ backgroundColor: getButtonColor(1, "optionA") }}
                >
                  May 26, 2023
                </button>
                <button
                  onClick={() => handleResponse(1, "optionB")}
                  style={{ backgroundColor: getButtonColor(1, "optionB") }}
                >
                  June 9, 2023
                </button>
                <button
                  onClick={() => handleResponse(1, "optionC")}
                  style={{ backgroundColor: getButtonColor(1, "optionC") }}
                >
                  Unknown; further impropper action must be taken by the party before losing authorization.
                </button>
              </div>
              {/* Display correctness feedback */}
              {responses.length > 1 && (
                <p className={`feedback ${getFeedbackColor(1)}`}>
                  {responses[1]?.isCorrect ? <b>Correct!</b> : <b>Incorrect!</b>}
                </p>
              )}
            </div>
            <div className="doneButtonContainer">
              <button
                onClick={handleDoneClick}
                style={{ backgroundColor: doneClicked ? "#4caf50" : "", color: doneClicked ? "white" : "black" }}
              >
                Done
              </button>
              {doneClicked && !loggedIn &&(
                <p className="doneMessage">Log in to receive credit for reading the article!</p>
              )}
              {doneClicked && loggedIn &&(
                <p className="doneMessage">You received credit for the article! Check your account to see updates to your achievements.</p>
              )}
            </div>
          </div>
        </div>
      </main>
      <style jsx>
        {`
          .bolded {
            font-weight: bold;
          }
          .correct {
            font-weight: bold;
            color: green;
          }
          .incorrect {
            font-weight: bold;
            color: red;
          }
          .newsContainer {
            display: flex;
            gap: 20px;
          }

          .newsStory {
            flex: 1;
          }

          .quizContainer {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .questionContainer {
            margin-bottom: 10px;
          }

          .optionsContainer {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          /* Styling for feedback */
          .feedback {
            font-weight: bold;
            margin-top: 5px;
          }



          /* Styling for streamlined buttons */
          button {
            color: black;
            background-color: white;
            border: 2px solid #4caf50; /* Darker green outline */
            padding: 10px 15px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s;
          }

          button:hover {
            background-color: #4caf50; /* Darker green on hover */
            color: white;
          }
        `}
      </style>
    </div>
  );
}
