import { render, screen } from "@testing-library/react";
import Home from "@/src/app/page";
import SignUp from "@/app/users/signup/page";
import Login from "@/app/users/login/page";

describe("Pages", () => {
  test("Home page render without error", async () => {
    render(<Home />);

    // Assert that the component renders without throwing any errors
  });
  test("Signup page renders without errors", async () => {
    render(<SignUp />);

    const titleElement = screen.getByText("Signup to Laptop.LK");
    expect(titleElement).toBeInTheDocument();

    // Assert that the component renders without throwing any errors
  });
  test("Signup page renders without errors", async () => {
    render(<SignUp />);

    const titleElement = screen.getByText("Already have an account?");
    expect(titleElement).toBeInTheDocument();

    // Assert that the component renders without throwing any errors
  });
  test("Login page renders without errors", async () => {
    render(<Login />);

    // Assert that the component renders without throwing any errors
  });
  test("Login page renders without errors", async () => {
    render(<Login />);

    const titleElement = screen.getByText("Dont have an account?");
    expect(titleElement).toBeInTheDocument();

    // Assert that the component renders without throwing any errors
  });
  test("Login page renders with text", async () => {
    render(<Login />);

    const titleElement = screen.getByText("Dont have an account?");
    expect(titleElement).toBeInTheDocument();

    // Assert that the component renders without throwing any errors
  });
  test("Login page renders with text", async () => {
    render(<Login />);

    const titleElement = screen.getByText("Login to Laptop.LK");
    expect(titleElement).toBeInTheDocument();

    // Assert that the component renders without throwing any errors
  });
});
