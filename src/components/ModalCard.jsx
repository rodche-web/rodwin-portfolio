const ModalCard = ({ isOpen, onClose, data = {} }) => {

  const closeModal = () => {
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300`}
    >
      <div
        className={`bg-black bg-opacity-50 absolute inset-0 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        onClick={closeModal}
      />
      <div
        className={`bg-white dark:bg-gray-800 p-1 md:p-10 rounded-lg shadow-lg m-8 w-80v ${
          isOpen ? 'transform translate-y-0' : 'transform translate-y-20'
        } transition-transform duration-300`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div className="flex flex-col md:flex-row opacity-100">
          <img
            src={data && data.imgUrl}
            alt="project"
            className="w-full md:w-1/2 h-auto object-cover md:h-auto"
          />
          <div className="p-6 md:p-8">
            <h2
              id="modal-headline"
              className="text-xl font-semibold text-gray-600 dark:text-white"
            >
              {data && data.title}
            </h2>
            <p
              className="mt-2 text-gray-600 dark:text-white"
            >
              {data && data.description}
            </p>
            {data && data.url && <a
              href={data.url}
              target="_blank"
              className="mt-4 mr-5 py-2 px-4 rounded dark:bg-gray-700 dark:text-white bg-gray-200 text-gray-800" rel="noreferrer"
            >
              Website
            </a>}
            <button
              onClick={closeModal}
              className="mt-4 mr-5 py-2 px-4 rounded dark:bg-gray-700 dark:text-white bg-gray-200 text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
