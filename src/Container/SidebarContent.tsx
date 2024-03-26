import { FC, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";

let optionsData = [
  { label: "First Name", value: "first_name" },
  { label: "Last Name", value: "last_name" },
  { label: "Gender", value: "gender" },
  { label: "Age", value: "age" },
  { label: "Account Name", value: "account_name" },
  { label: "City", value: "city" },
  { label: "State", value: "state" },
];

interface sidebarContentProps {
  closeSidebar: () => void;
}

const SidebarContent: FC<sidebarContentProps> = ({ closeSidebar }) => {
  const [schema, setSchema] = useState<any>({});
  const [options, setOptions] = useState<any>([]);
  const [schemaName, setSchemaName] = useState<string>("");
  const [InputData, setInputData] = useState<any>([]);
  const [formData, setFormData] = useState<any>([]);

  useEffect(() => {
    setOptions(optionsData);
  }, [optionsData]);

  const selectHandler = (e: any) => {
    const selectedText = e.target.options[e.target.selectedIndex].textContent;
    setSchema({ label: selectedText, value: e.target.value });
  };

  const inputHandler = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const addNewSchemaHandler = () => {
    if (schema?.value) {
      optionsData = optionsData.filter(
        (option) => option.value !== schema.value
      );
      setInputData([...InputData, schema]);
      setSchema({});
    }
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const formDataArray = Object.entries(formData).map(([key, value]) => ({
      name: key,
      value,
    }));

    let jsonObj = { segment_name: schemaName, schema: formDataArray };
    console.log(jsonObj);

    // const response = await fetch(
    //   "https://webhook.site/c1dd3c73-85a8-415a-a4df-b5999eca00a6",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(jsonObj),
    //   }
    // );
    // console.log(response);
  };

  const cancelHandler = () => {
    setInputData([]);
    setSchemaName("");
    setSchema({});
    closeSidebar();
    optionsData = [
      { label: "First Name", value: "first_name" },
      { label: "Last Name", value: "last_name" },
      { label: "Gender", value: "gender" },
      { label: "Age", value: "age" },
      { label: "Account Name", value: "account_name" },
      { label: "City", value: "city" },
      { label: "State", value: "state" },
    ];
  };

  return (
    <form
      onSubmit={submitHandler}
      className="h-full flex flex-col justify-between"
    >
      <div className="p-5 flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-5">
          <label htmlFor="">Enter the Name of the Segment</label>
          <input
            required
            type="text"
            onChange={(e) => setSchemaName(e.target.value)}
            placeholder="Name of the segment"
            className="outline-none p-2 text-[16px] border border-[#a9b0b7] rounded-sm"
          />
          <p>
            To save your segment, you need to add the schemas to bulid the query
          </p>
        </div>
        <div className="flex items-center justify-end gap-5">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-[#5ddb78] rounded-full" />
            <span>- User Traits</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-[#d24572] rounded-full" />
            <span>- Group Traits</span>
          </div>
        </div>
        {InputData.map((inputItem: any) => (
          <div
            className="flex items-center gap-x-5 w-full"
            key={inputItem.value}
          >
            <div className="w-3 h-3 rounded-full bg-[#e2e4e6]" />
            <input
              required
              type="text"
              placeholder={inputItem.label}
              onChange={inputHandler}
              name={inputItem.value}
              className="w-full outline-none p-2 text-[16px] border border-[#a9b0b7] rounded-sm"
            />
          </div>
        ))}
        <div>
          <div className="flex items-center gap-5">
            <div className="w-3 h-3 rounded-full bg-[#e2e4e6]" />
            <div className="flex-1">
              <select
                className="border p-2 w-full outline-none border-[#a9b0b7] rounded-sm"
                defaultValue=""
                onChange={selectHandler}
              >
                <option value="">Add schema to segment</option>
                {options.length === 0 && (
                  <option value="">No more options</option>
                )}
                {options.map((option: any) => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div
          onClick={addNewSchemaHandler}
          className="cursor-pointer select-none flex items-center gap-1 text-[#4ebb9f] underline font-semibold"
        >
          <FaPlus size={10} />
          <span>Add new schema</span>
        </div>
      </div>
      <div className="flex items-center gap-5 bg-[#f6f6f6] p-5">
        <button
          type="submit"
          className="font-semibold p-2 outline-none bg-[#41b494] text-white rounded-sm"
        >
          Save segment
        </button>
        <button
          onClick={cancelHandler}
          className="font-semibold p-2 outline-none bg-white text-[#d9648a] rounded-sm"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default SidebarContent;
