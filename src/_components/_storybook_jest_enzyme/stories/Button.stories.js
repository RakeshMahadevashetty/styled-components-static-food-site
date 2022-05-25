import Button from "../components/Button";

export default {
  title: "Components/MyButton",
  component: Button,
  argTypes: {
      handleClick: {
          action: "Rocky handleClick"
      }
  } 
};

// export const Red = () => <Button label="Press me1" backgroundColor="red"/>

// export const Blue = () => <Button label="Press me2" backgroundColor="blue"/>

const Template = (args) => <Button {...args} />;
export const Red = Template.bind({});
Red.args = {
  label: "Press me1",
  backgroundColor: "red",
  size: "md",
};

export const Blue = Template.bind({});
Blue.args = {
  label: "Press me1",
  backgroundColor: "blue",
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  label: "Press me1",
  backgroundColor: "red",
  size: "lg",
};

export const longText = Template.bind({});
longText.args = {
  label: "Press me1 djjdjdjdj",
  backgroundColor: "red",
  size: "md",
};