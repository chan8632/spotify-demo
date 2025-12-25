import { Alert } from "@mui/material";

interface ErrorMessageProps {
  errorMessage: string;
}
const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return (
    <div>
      <Alert severity="error">{errorMessage}</Alert>
    </div>
  );
};

export default ErrorMessage;
