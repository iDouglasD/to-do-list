import React from "react";
import { useParams } from "react-router";
import "./TaskDetails.css";
import { useHistory } from "react-router-dom";

import Button from "./Button";

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();
    const handleBackButtonClick = () => {
        history.goBack();
    };

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2> {params.taskTitle} </h2>
                <p>Para ser extraordinário é preciso ser constante!</p>
            </div>
        </>
    );
};

export default TaskDetails;
