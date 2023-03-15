import "../css/loadingSpinner.css";

export const LoadingSpinner = () => {
  return (
    <div data-testid="spinner" className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
  );
};