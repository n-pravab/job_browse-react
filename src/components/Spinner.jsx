import ClipLoader from "react-spinners/ClipLoader";
const Spinner = ({ loading }) => {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <ClipLoader
      color="#3B82F6"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
