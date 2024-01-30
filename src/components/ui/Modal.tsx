import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { CardContext } from "../../context/CardContext";
export const Modal: React.FC = () => {
  const { repeatedValues, isOpenModal, setIsOpenModal } =
    useContext(CardContext);

  return (
    <>
      <Transition appear show={isOpenModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpenModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0  overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-dark_card p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-blue-500 "
                  >
                    Wybierz albo giń!
                  </Dialog.Title>
                  <div className="mt-2 flex flex-wrap gap-x-1">
                    {repeatedValues.map((move, id) => (
                      <p key={id} className="text-sm text-dark_text">
                        {move}
                      </p>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
