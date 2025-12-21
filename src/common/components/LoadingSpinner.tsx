import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <Spinner animation="border" variant="success" />
    </div>
  );
};

export default LoadingSpinner;
