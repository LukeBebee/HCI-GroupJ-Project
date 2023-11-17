import Navbar from "../../components/navbar"
import { useState, useEffect } from "react";

import RepresentativeInfo from "../../components/representativeInfo";

export default function Representatives() {
    const [myState, setMyState] = useState({reps: []});
    useEffect(() => {
        setMyState({reps: JSON.parse(sessionStorage.getItem("zipAssocData"))?.representatives_concordance})
        console.log(myState);
    }, [])
    return (
        <div>
          <Navbar pageName="Representatives" homePage={false}/>
          {
            myState.reps.map((obj, i) => <RepresentativeInfo props={obj} key={i}></RepresentativeInfo>)
          }
          </div>
    )
}