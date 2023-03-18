const ModalBox = ({ visibleModal, setVisibleModal }) => {
  return (
    <div
      className={`absolute top-3 right-0 -translate-x-[50%] bg-yellow-400 p-5 rounded-lg ${
        visibleModal ? "block" : "hidden"
      }`}
    >
      <h1 className="text-xl">Required</h1>
      <p className="text-lg">Todo must be above 3 characters.</p>
      <button
        onClick={() => setVisibleModal(false)}
        className="bg-blue-600 text-white px-3 py-2 rounded-lg mt-5 float-right hover:bg-opacity-60 active:bg-opacity-20"
      >
        Understood
      </button>
    </div>
  );
};
export default ModalBox;
