import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Select, Button } from "antd";

const { Option } = Select;

const DynamicForm = ({ schema, defaultValues, onSubmit }) => {
  const { control, handleSubmit, watch, reset } = useForm({ defaultValues });

  const sampleType = watch("sampleType");

  const filteredFields = schema.fields.filter(
    (field) => !field.sampleType || field.sampleType === sampleType
  );

  const handleFormSubmit = (data) => {
    onSubmit(data); // Trigger the parent `onSubmit` function
    reset(); // Clear the form values after submission
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {filteredFields.map((field) => (
        <div key={field.name} style={{ marginBottom: "16px" }}>
          <label>{field.label}</label>
          <Controller
            name={field.name}
            control={control}
            rules={field.validation}
            render={({ field }) => {
              if (field.type === "select") {
                return (
                  <Select {...field}>
                    {field.options.map((opt) => (
                      <Option key={opt.value} value={opt.value}>
                        {opt.label}
                      </Option>
                    ))}
                  </Select>
                );
              }
              return <Input {...field} placeholder={field.placeholder} />;
            }}
          />
        </div>
      ))}
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </form>
  );
};

export default DynamicForm;
