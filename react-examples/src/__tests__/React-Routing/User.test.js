import {render, screen} from "@testing-library/react";
import axios from "axios";
import UsersComponent from '../../React-Routing/UsersComponent';
import { MemoryRouter } from "react-router-dom";
import { Suspense } from "react";

jest.mock("axios");

test("renders users page", async () => {
  // Mock the API response
  axios.get.mockResolvedValue({
    data: [
      { id: 1, name: "Leanne Graham" },
      { id: 2, name: "Ervin Howell" }
    ]
  });

  render(
    <MemoryRouter initialEntries={["/users"]}>
      <Suspense fallback={<div>Loading...</div>}>
        <UsersComponent />
      </Suspense>
    </MemoryRouter>
  );

  const usersText = await screen.findByText(/users component/i);
  expect(usersText).toBeInTheDocument();

  // Optional: check if mocked users are rendered
  expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
  expect(screen.getByText("Ervin Howell")).toBeInTheDocument();
});
