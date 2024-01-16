import React from "react";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLaptop } from "react-icons/ai";
import Link from "next/link";

interface ModalProps {
  description: string;
  title: string;
  gitLink: string;
  projectLink: string;
  modalVisible: boolean;
  toggleModal: VoidFunction;
}

function Modal(props: ModalProps) {
  return (
    <div
      className="bg-[#fff] lg:w-1/3 md:w-3/5 w-5/6 p-6 m-8 rounded-lg fixed top-1/4 drop-shadow-xl z-[100] right-0 left-0 mx-auto cursor-default ease-in-out duration-100"
      style={{
        visibility: props.modalVisible ? "visible" : "hidden",
        opacity: props.modalVisible ? 1 : 0,
      }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4">
          <h4 className="text-left text-lg font-medium cursor-text">
            {props.title}
          </h4>
          <p onClick={props.toggleModal} className="cursor-pointer">
            &times;
          </p>
        </div>
        <div>
          <p className="font-light text-sm tracking-wide cursor-text">
            {props.description}
          </p>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="text-ghPurple mr-2">
          <Link href={props.gitLink} target="__blank">
            <FiGithub className="text-2xl mr-2" />
          </Link>
        </div>

        {props.projectLink !== "" ? (
          <div className="text-blue">
            <Link href={props.projectLink} target="__blank">
              <AiOutlineLaptop className="text-2xl mr-2" />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Modal;