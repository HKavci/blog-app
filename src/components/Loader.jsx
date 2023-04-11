import loadingGif from "../assets/loading.gif";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={loadingGif} alt="loading" />
    </div>
  );
};

export default Loader;
