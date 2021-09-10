import React from "react";
import { render } from "@testing-library/react";
import { Child } from ".";

describe("forwardRef", () => {
  test.only("should pass if no ref passed from Parent", () => {
    const Parent = () => (
      <div>
        <Child />
      </div>
    );
    render(<Parent />);
  });

  test("should pass if Parent pass ref to Child", () => {
    const Parent = () => {
      const ref = React.createRef();
      return (
        <div>
          <Child ref={ref} />
        </div>
      );
    };
    render(<Parent />);
  });
});
