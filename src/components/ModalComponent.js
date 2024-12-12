import React from "react";
import { Modal } from "antd";

const ModalComponent = ({ isVisible, onClose, children }) => (
  <Modal open={isVisible} onCancel={onClose} footer={null}>
    {children}
  </Modal>
);

export default ModalComponent;
