import dynamic from "next/dynamic";
import { Props } from "react-select";

const Select = dynamic(() => import("react-select"), { ssr: false });

interface SelectInputProps extends Props {
  width?: string;
  backgroundColor?: string;
  border?: string;
  padding?: string;
}

export default function SelectInput(props: SelectInputProps) {
  const {
    width = "17.5rem",
    backgroundColor = "#E44449",
    border = "1px solid #fff",
    padding = "1.2rem 0rem",
    ...rest
  } = props;

  const customStyles = {
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#ffffff",
      padding: "0",
      marginRight: "0.5rem",

      "&:hover": {
        color: "#fff",
      },
    }),
    control: (provided) => ({
      ...provided,
      width,
      height: "4.5rem",
      padding,
      backgroundColor,
      border,
      borderRadius: "16px",
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    input: (provided) => ({
      ...provided,
      color: "#fff",
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "white",
      fontWeight: "bold",
      fontSize: "1.25rem",
      overflow: "none",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#FBE1E2",

      width,
      border: "transparent",
      overflow: "hidden",
    }),
    menuList: (provided) => ({
      ...provided,
      overflow: "auto",
      maxHeight: "6rem",

      "&::-webkit-scrollbar": {
        width: "2px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#0D3B66",
        borderRadius: "20px",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#f8f8f8",
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#F4D35E" : "#FBE1E2",
      color: "black",
      "&:hover": {
        backgroundColor: "#E44449",
        color: "white",
      },
    }),
  };

  return (
    <>
      <Select styles={customStyles} {...rest} />
    </>
  );
}
