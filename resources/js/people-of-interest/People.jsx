import { useEffect, useState } from "react";
import StatusFilter from "./StatusFilter";
import PersonDetail from "./PersonDetail";

function People() {
    const [people, setPeople] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("");
    const [personId, setPersonId] = useState(null);

    const loadData = async () => {
        const response = await fetch(
            `/api/people?status=${encodeURIComponent(selectedStatus)}`
        );
        const data = await response.json();

        setPeople(data);
    };

    useEffect(() => {
        loadData();
    }, [selectedStatus]);

    return (
        <div>
            <StatusFilter
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
            />
            {personId == null ? (
                people?.map((person) => {
                    return (
                        <div key={person.id}>
                            <ul>
                                Name: {person.name}
                                <ul>
                                    Nationality: {person.nationality} <br />
                                    Status: {person.status_text}
                                </ul>
                                <button onClick={() => setPersonId(person.id)}>
                                    See detail
                                </button>
                            </ul>
                        </div>
                    );
                })
            ) : (
                <PersonDetail personId={personId} setPersonId={setPersonId} />
            )}
        </div>
    );
}
export default People;
