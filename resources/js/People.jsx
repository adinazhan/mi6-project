import { useEffect } from "react";

function People() {
    const loadData = async () => {
        const response = await fetch("/api/people");
        const data = await response.json();
        console.log(data);
    };
    useEffect(() => {
        loadData();
    }, []);

    // data.map((person, index) => {
    //     return (
    //         <li>
    //             key={index} {person?.name}
    //         </li>
    //     );
    // });
}
export default People;
