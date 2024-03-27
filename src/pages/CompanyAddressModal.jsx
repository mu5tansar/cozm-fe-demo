import React from "react";
import Modal from "../components/Modal";
import FormField from "../components/FormField";
import { useForm } from "react-hook-form";
import "./CompanyAddressModal.css";
import Button from "../components/Button";
const MDOAL_TITLE = "Destination Company Address";
export default function CompanyAddressModal() {
  const { handleSubmit, watch, setValue, control } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
  };
  const handleClearValue = (propertyName) => setValue(propertyName, "");
  console.log({ name: watch("name") }); // watch input value by passing the name of it
  return (
    <div>
      <Modal title={MDOAL_TITLE}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form_content">
            <FormField
              name="name"
              label="Name"
              placeholder="Name"
              control={control}
              onClear={handleClearValue}
            />
            <FormField
              name="location"
              label="Location"
              placeholder="Location"
              control={control}
              onClear={handleClearValue}
            />
            <FormField
              name="streetName"
              label="Street Name"
              placeholder="Street Name"
              control={control}
              onClear={handleClearValue}
            />
            <FormField
              name="streetNumber"
              label="Street Number"
              placeholder="Street Number"
              control={control}
              onClear={handleClearValue}
            />
            <FormField
              name="postCode"
              label="Post Code"
              placeholder="Post Code"
              control={control}
              onClear={handleClearValue}
            />
            <FormField
              name="city"
              label="Town / City"
              placeholder="Town / City"
              control={control}
              onClear={handleClearValue}
            />
            <FormField
              name="country"
              label="Country"
              placeholder="Country"
              control={control}
              onClear={handleClearValue}
            />
          </div>
          <footer className="form_action">
            <Button type="button" className="button_outlined button_close">
              Close
            </Button>
            <Button type="submit">Add More</Button>
          </footer>
        </form>
      </Modal>
    </div>
  );
}
