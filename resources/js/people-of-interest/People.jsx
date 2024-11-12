import { useEffect, useState } from "react";
import StatusFilter from "./StatusFilter";

function People() {
    const [people, setPeople] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("");

    const loadData = async () => {
        const response = await fetch("/api/people");
        const data = await response.json();
        console.log(data);
        setPeople(data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return people?.map((person, index) => {
        return (
            <>
                <div key={index}>
                    <ol>
                        <li>{person.name}</li>
                    </ol>
                    <ul>
                        <li>{person.nationality}</li>
                        <li>{person.eye_color}</li>
                    </ul>
                </div>
                {/* <StatusFilter
                    selectedStatus={selectedStatus}
                    setSelectedStatus={setSelectedStatus}
                /> */}
            </>
        );
    });
}
export default People;
