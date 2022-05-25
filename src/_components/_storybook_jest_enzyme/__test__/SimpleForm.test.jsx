import { render } from "@testing-library/react";
import SimpleForm from "../components/SimpleForm";

describe("Form Component", () => {
  it("Rendered Form", () => {
    const { getByTestId } = render(<SimpleForm />);
    const currentForm = getByTestId("form");
    expect(currentForm).toBeTruthy();
  });
});
