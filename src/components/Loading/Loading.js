import Spinner from 'react-bootstrap/Spinner';
import "./Loading.css"

function LoadingAnimation(props) {
    return (
        <div className="spinner-container">
            <Spinner animation="border" role="status" variant={props.variant || "danger"}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default LoadingAnimation;