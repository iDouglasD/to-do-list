import React from "react";
import { useParams } from "react-router";

import Button from "./Button";

const TaskDetails = () => {
    const params = useParams();
    console.log(params);
    return (
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <p> {params.taskTitle} </p>
                <p>lorem ipsum dolor sit amet, consectet</p>
            </div>
        </>
    );
};

export default TaskDetails;
