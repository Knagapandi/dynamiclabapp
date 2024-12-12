import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLab, editLab } from "./redux/labsSlice";
import { labsData } from "./data/labsData";
import GridComponent from "./components/GridComponent";
import DynamicForm from "./components/DynamicForm";
import ModalComponent from "./components/ModalComponent";

const App = () => {
  const dispatch = useDispatch();
  const labs = useSelector((state) => state.labs.labs);

  const [isModalVisible, setModalVisible] = useState(false);
  const [editData, setEditData] = useState(null);

  // React.useEffect(() => {
  //   dispatch(setLabs(labsData));
  // }, [dispatch]);

  const schema = {
    fields: [
      { name: "labName", label: "Lab Name", placeholder: "Enter Lab Name", type: "text", validation: { required: true } },
      { name: "location", label: "Location", placeholder: "Enter Location", type: "text" },
      { name: "sampleType", label: "Sample Type", type: "select", options: [{ label: "Oil", value: "Oil" }, { label: "Water", value: "Water" }] },
      { name: "parameters", label: "Parameters", placeholder: "Enter Parameters", type: "text", sampleType: "Oil" },
    ],
  };

  const handleAddClick = () => {
    setEditData(null);
    setModalVisible(true);
  };

  const handleRowClick = (row) => {
    setEditData(row.data);
    setModalVisible(true);
  };

  const handleFormSubmit = (data) => {
    console.log(data,"data")
    if (editData) {
      dispatch(editLab({ ...editData, ...data }));
    } else {
      dispatch(addLab({ id: labs.length + 1, ...data }));
    }
    setModalVisible(false);
    setEditData(null);
  };

  return (
    <div>
      <button onClick={handleAddClick}>Add Lab</button>
      <GridComponent rowData={labs} onEdit={handleRowClick} />
      <ModalComponent isVisible={isModalVisible} onClose={() => setModalVisible(false)}>
        <DynamicForm schema={schema} defaultValues={editData} onSubmit={handleFormSubmit} />
      </ModalComponent>
    </div>
  );
};

export default App;
