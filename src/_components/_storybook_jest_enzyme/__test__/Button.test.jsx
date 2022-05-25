import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import Button from "../components/Button";

describe("Button component", () => {
  it("Rendered Button", () => {
    const { getByTestId } = render(<Button label="Click" />);
    const currentButton = getByTestId("button");
    expect(currentButton).toBeTruthy();
  });
});

test("Should test Button component", () => {
  const wrapper = shallow(<Button label="click me.." size="sm"/>);
  expect(wrapper).toMatchSnapshot();
});

test("Should call handleClick method", () => {
  const wrapper = shallow(
    <Button
      label={"test click"}
      handleClick={() => console.log("Button clicked")}
      size="lg"
    />
  );
  const instance = wrapper.instance();
  // instance.handleClick({
  //   preventDefault: () => {}
  // })
});
