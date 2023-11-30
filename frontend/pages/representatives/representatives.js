import Navbar from "../../components/navbar"
import { useState, useEffect } from "react";

import RepresentativeInfo from "../../components/representativeInfo";
import { inter } from "../../utils/fonts";

export default function Representatives() {
  const [ myData, setMyData ] = useState({zip: "", electionsData: null});
  useEffect(() => {
      const fetchElection = async () => {
          try {
              const res = await fetch('/api/electioninfo', {
                  method: 'GET'
              })
              if (!res.ok) {
                  throw new Error(res.status.toString());
              }
              const data = (await res.json()).data;
              console.log(data);
              setMyData({zip: sessionStorage.getItem("zipcode"), electionsData: data});
          } catch (error) {
              alert("Error occurred fetching election data")
              console.log(error);
          }
      }
      if (!myData.electionsData) {
          fetchElection();
      }

      console.log(myData);
      
  }, [])
  const montrealBoolean = !(myData.zip.slice(0, 3) < "H1A" || myData.zip.slice(0, 3) > "H5B");
  const [myState, setMyState] = useState({reps: []});
    useEffect(() => {
        setMyState({reps: JSON.parse(sessionStorage.getItem("zipAssocData"))?.representatives_concordance})
        console.log(myState);

    }, [])
    
    return (
        <div className={inter.className}>
          
          <Navbar pageName="Representatives" homePage={false}/>
          
          {montrealBoolean &&
          <div>
            {
              myState.reps.map((obj, i) => <RepresentativeInfo props={obj} key={i}></RepresentativeInfo>)
            }
          </div>
          }
          
          {!montrealBoolean &&
          <main>
          <h2> No representative information is currently available for your postal code. </h2>
          </main>
          }
          

<style jsx>
                {
                    `
                    .electionsContainer {
                        display: flex;
                        flex-direction: row;
                        height: 580px;
                        gap: 20px;
                    }
                    .linkContainer {
                        display: flex;
                        flex-direction: row;
                        height: 100px;
                        gap: 10px;
                    }
                    main {
                        display: flex;
                        flex-direction: column; /* Set to column for vertical stacking */
                        align-items: center; /* Center items horizontally */
                        background-color: #f5f5f5; /* Set the background color */
                        padding: 20px;
                        height: calc(100vh - 70px);
                    }
                    h2 {
                        font-size: 24px;
                        margin: 0 20px; /* Add space around text */
                    }
                `
                }
            </style>



        </div>


        

    )
}
