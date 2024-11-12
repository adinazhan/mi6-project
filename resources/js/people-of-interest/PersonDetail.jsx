import { useEffect, useState } from "react";

function PersonDetail({ personId, setPersonId }) {
    const [person, setPerson] = useState(null);

    const loadPerson = async () => {
        const response = await fetch(`/api/people/${personId}`);
        const data = await response.json();
        setPerson(data[0]);
        console.log(data);
    };
    useEffect(() => {
        loadPerson();
    }, [personId]);

    return (
        <div>
            {person ? (
                <>
                    <h1>{person.name}</h1>
                    <ol>
                        <li>Nationality: {person.nationality}</li>
                        <li> Occupation: {person.occupation}</li>
                        <li>Eye_color: {person.eye_color}</li>
                    </ol>
                </>
            ) : (
                <h2>Loading...</h2>
            )}
            <button onClick={() => setPersonId(null)}>Go back</button>
        </div>
    );
}

export default PersonDetail;
