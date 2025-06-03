import { render, screen, fireEvent } from "@testing-library/react";
import Like from "../Like";

describe("Like Component", () => {
  test("Muestra el valor por defecto 'Likes: 0'", () => {
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
  });

  test("Incrementa el número de likes al hacer clic en Like", () => {
    render(<Like />);
    const likeButton = screen.getByTestId("like-button");
    fireEvent.click(likeButton);
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
  });

  test("Decrementa el número de likes al hacer clic en Dislike", () => {
    render(<Like />);
    const dislikeButton = screen.getByTestId("dislike-button");
    fireEvent.click(dislikeButton);
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
  });
});
