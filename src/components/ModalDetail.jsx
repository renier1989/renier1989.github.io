import { useCvInfo } from "../context";

const ModalDetail = (data) => {
  const { language, closeModal } = useCvInfo();
  const { titleEn, titleEs, contentEn, contentEs, tech, link } = data.data;
  return (
    <div>
      <div className="relative p-4 w-full max-w-2xl max-h-full ">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t text-white">
          <h3 className="text-xl font-semibold text-white">
            {language ? <span>{titleEs}</span> : <span>{titleEn}</span>}
          </h3>
          <button
            onClick={() => closeModal()}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="p-4 md:p-5 space-y-4">
          {language ? (
            <p className="text-base leading-relaxed text-white">{contentEs}</p>
          ) : (
            <p className="text-base leading-relaxed text-white">{contentEn}</p>
          )}

          <div className="flex gap-5 flex-wrap ">
            {tech.map((t) => (
              <div key={t.id} className="flex border-t border-gray-800 py-2">
                <span className="text-white">{t.name}</span>
              </div>
            ))}
          </div>
          {link ? (
            <div>
              <a
                href={link}
                target="_blank"
                className="transition duration-500 hover:text-orange-500 flex flex-col rounded-full w-20 h-20 bg-gray-800 p-0 border-0  items-center justify-center text-gray-500 ml-4 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-link-45deg"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                </svg>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ModalDetail;
