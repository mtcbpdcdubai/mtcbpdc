const styles = `
/* spinning animation */
@keyframes loading-screen-spin {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}

.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it's on top of all other content */

  .circle {
    display: block;
    width: 5rem;
    height: 5rem;
    border: 0.5rem solid transparent;
    border-top: 0.5rem solid #0078D7; /* Blue */
    border-right: 0.5rem solid #00BC28; /* Green */
    border-bottom: 0.5rem solid #D83B01; /* Red */
    border-left: 0.5rem solid #FFB900; /* Yellow */
    border-radius: 50%;
    position: absolute;
    box-sizing: border-box;
    animation: loading-screen-spin 1.5s linear 0s infinite;
  }
}`;

export default function LoadingScreen() {
  return (<>
    <style>{styles}</style>
    <div className="loading-screen">
      <span className="circle" />
    </div>
  </>);
}
