import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import FormField from "../components/FormField";
import { useForm } from "react-hook-form";
import "./CompanyAddressModal.css";
import Button from "../components/Button";
import { addressService } from "../service/address.service";
import AddressSelectModal from "../components/AddressSelectModal";
const MDOAL_TITLE = "Destination Company Address";
export default function CompanyAddressModal() {
  const [searchAddressResult, setSearchAddressResult] = useState(null);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const { handleSubmit, watch, setValue, control, reset } = useForm();
  const nameValue = watch("name");
  const searchAddressByCompany = async ({ name, country }) => {
    const { data } = await addressService.getAddressByCompany({
      name,
      country,
    });
    setSearchAddressResult(data);
    if (data?.length > 0) setIsAddressModalOpen(true);
  };

  useEffect(() => {
    if (nameValue) {
      const debounceSearch = setTimeout(
        () => searchAddressByCompany({ name: nameValue, country: "UK" }),
        2000
      );
      return () => clearTimeout(debounceSearch);
    }
  }, [nameValue]);
  const onAddressSelect = (address) => {
    setIsAddressModalOpen(false);
    const { city, postal_code, street_name, house_number, country } = address;
    setValue("city", city);
    setValue("postal_code", postal_code);
    setValue("house_number", house_number);
    setValue("street_name", street_name);
    setValue("country", country);
  };
  const onSubmit = (data) => {
    console.log({ data });
    reset();
  };
  const handleClearValue = (propertyName) => setValue(propertyName, "");

  return (
    <div>
      <Modal open title={MDOAL_TITLE}>
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
              name="street_name"
              label="Street Name"
              placeholder="Street Name"
              control={control}
              onClear={handleClearValue}
            />
            <FormField
              name="house_number"
              label="Street Number"
              placeholder="Street Number"
              control={control}
              onClear={handleClearValue}
            />
            <FormField
              name="postal_code"
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
      <AddressSelectModal
        open={isAddressModalOpen}
        data={searchAddressResult}
        onSelect={onAddressSelect}
        onClose={() => setIsAddressModalOpen(false)}
      />
    </div>
  );
}
