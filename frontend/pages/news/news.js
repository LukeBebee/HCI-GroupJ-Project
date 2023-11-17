import Navbar from '../../components/navbar';
import Head from 'next/head';
import { useState, useEffect } from "react"
import ElectionInfo from '../../components/electionInfo';
import { inter } from '../../utils/fonts';
export default function News() {
    return (
        <div className={inter.className}>
            <Navbar pageName={`News`} homePage={false}/>
            <Head>
                <title>News</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Sample News Story</h1>
                <div className ="electionsContainer">
                    <p><i>Disclaimer: This news story is entirely fictional and created for demonstration purposes only. Any resemblance to real persons, living or dead, is purely coincidental.

                    </i><br></br><b>Montreal, [Current Date]</b> — In a surprising turn of events, political newcomer John Doe has officially announced his candidacy for a prominent office in Montreal. Despite being a relatively unknown figure in the political scene, Doe has set his sights high, aiming to bring fresh perspectives and innovative ideas to the forefront of the upcoming election.

                    <br></br>In a press conference held earlier today, Doe outlined his vision for a more inclusive and sustainable Montreal. His proposed policies range from urban development initiatives to environmental conservation efforts, capturing the attention of both supporters and skeptics alike.

                    <br></br>"I believe in the power of unity and collaboration. Together, we can build a better Montreal for future generations," declared Doe passionately during his campaign kickoff.

                    <br></br>While some residents expressed excitement over the prospect of a new face in politics, others questioned Doe's lack of political experience. Critics argue that a seasoned candidate may be better equipped to navigate the complexities of public office.

                    <br></br>Doe, however, remains undeterred. "I may not have a long political resume, but what I bring to the table is a fresh perspective and a genuine desire to serve the people of Montreal," he responded.

                    <br></br>As the election season unfolds, Montrealers are sure to witness an interesting and dynamic campaign from John Doe.

                    <br></br>Disclaimer: This news story is entirely fictional and created for demonstration purposes only. Any resemblance to real persons, living or dead, is purely coincidental.</p>
                    
                    <p><b>Question 1:</b>
                    <br></br>What aspect of John Doe's proposed policies do you find most intriguing, and how do you think it could positively impact Montreal?

                    <br></br><br></br><b>Question 2:</b>
                    <br></br>In light of John Doe's lack of political experience, do you believe fresh perspectives in politics can lead to positive change? Why or why not?</p>
                </div>
            </main>
            <style jsx>
                {
                    `
                        .electionsContainer {
                            display: flex;
                            flex-direction: row;
                            height: 580px;
                            gap: 20px;
                        }
                    `
                }
            </style>
        </div>
    )
}