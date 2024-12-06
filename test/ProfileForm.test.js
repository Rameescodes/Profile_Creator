import { render, screen, fireEvent } from "@testing-library/react";
import ProfileForm from "../components/ProfileForm";

describe("ProfileForm", () => {
  test("renders the form without crashing", () => {
    render(<ProfileForm />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone (Optional)")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("shows validation errors for empty required fields", () => {
    render(<ProfileForm />);
    fireEvent.click(screen.getByText("Submit"));
    expect(screen.getByText("Name is required.")).toBeInTheDocument();
    expect(screen.getByText("Email is required.")).toBeInTheDocument();
    expect(screen.getByText("Password is required.")).toBeInTheDocument();
  });
});
