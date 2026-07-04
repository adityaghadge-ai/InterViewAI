import { useParams } from "react-router-dom";

const InterviewRoomPage = () => {

    const { id } = useParams();

    return (

        <div>

            <h1>Interview Room</h1>

            <h3>Interview ID</h3>

            <p>{id}</p>

        </div>

    );

};

export default InterviewRoomPage;