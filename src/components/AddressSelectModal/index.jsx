import React from "react";
import Modal from "../Modal";
import Button from "../Button";
import "./AddressSelectModal.css";
export default function AddressSelectModal({ open, onClose, onSelect, data }) {
  return (
    <Modal
      open={open}
      title="Select the Company Address"
      className="address_modal"
    >
      <div className="address_modal_content">
        <div className="address_list">
          {data?.map((item) => (
            <div onClick={() => onSelect(item)} className="address_item">
              {item.name}, {item.city}
              <div className="address_detail">
                {item.street_name} {item.postal_code}
              </div>
            </div>
          ))}
        </div>
        <footer className="">
          <Button className="button_outlined" onClick={onClose}>
            Close
          </Button>
        </footer>
      </div>
    </Modal>
  );
}
