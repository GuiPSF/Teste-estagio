import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background: red;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;

  &:hover {
    background: darkred;
  }
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        {children}
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
