import { useEffect, useState } from "react";

function StatusFilter({ selectedStatus, setSelectedStatus }) {
    const [statuses, setStatuses] = useState([]);

    const loadStatuses = async () => {
        const response = await fetch("/api/statuses");
        const data = await response.json();

        setStatuses(data);
    };

    useEffect(() => {
        loadStatuses();
    }, []);

    return statuses.map((status) => {
        return (
            <div
                className={
                    "status-filter__status" +
                    (selectedStatus ? "" : " status-filter__status_selected")
                }
                key={status.id}
            >
                <button
                    onClick={() => {
                        setSelectedStatus(status.id);
                    }}
                >
                    {status.name}
                </button>
            </div>
        );
    });
}

export default StatusFilter;
