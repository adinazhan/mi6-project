import { useEffect, useState } from "react";

function StatusFilter({ selectedStatus, setSelectedStatus }) {
    const [statuses, setStatuses] = useState([]);

    const loadStatuses = async () => {
        const response = await fetch("/api/statuses");
        const data = await response.json();
        console.log(data);
    };

    useEffect(() => {
        loadStatuses();
    });

    return statuses.map((status, index) => {
        console.log(status);

        return (
            <div className={"status-filter__status"} key={index}>
                {status.name}
            </div>
        );
    });
}

export default StatusFilter;
