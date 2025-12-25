import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center vw-100">
      <Spinner animation="border" variant="success" />
    </div>
  );
};

export default LoadingSpinner;
