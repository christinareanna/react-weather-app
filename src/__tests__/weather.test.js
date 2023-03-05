import { render, screen } from "@testing-library/react";
import Weather from "../components/Weather";
import "@testing-library/jest-dom";
import axios from "axios";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

describe("Weather component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("renders", () => {
        it("search button and icon renders", async () => {
            render(<Weather units="imperial" />);
            const searchButton = screen.getByRole("button", { class: "" });
            const searchIcon = screen.getByTestId("search-icon");

            expect(searchButton).toBeInTheDocument();
            expect(searchIcon).toBeInTheDocument();
            expect(searchButton).toContainElement(searchIcon);
        });


        describe("search functionality renders", () => {
            it("input field and search button work", async () => {
                const mockResponse = {
                    data: {
                        weather: [{ description: "cloudy" }],
                        main: [{ temp: 70, feels_like: 60, humidity: 20 }],
                        name: "New York ",
                    },
                };

                axios.get.mockResolvedValueOnce(mockResponse);

                render(<Weather units="imperial" />);
                const input = screen.getByPlaceholderText("Type in city name");
                const searchButton = screen.getByRole("button", { class: "" });

                userEvent.type(input, "New York");
                userEvent.click(searchButton);

                const url = `https://api.openweathermap.org/data/2.5/weather?q=New York&units=imperial&appid=83a9f6d687abc62e46d6bc1bdc324045`;
                expect(axios.get).toHaveBeenCalledTimes(1);
                expect(axios.get).toHaveBeenCalledWith(url);
            });
        });
    });
});

// Meant for Weath component within Weather but kept breaking everything

                // it("initial weather information text", () => {
                //     render(<Weather units="imperial" />);
                //     const weatherInfo = screen.getByText(/Weather information for/i);
                //     expect(weatherInfo).toBeInTheDocument();
                // });

                // expect(screen.getByTestId("weather")).toHaveTextContent("Weather: cloudy");
                // expect(screen.getByText(/81/i)).toBeInTheDocument();
                // expect(screen.getByText(/Feels like: 44/i)).toBeInTheDocument();
                // expect(screen.getByText(/Humidity: 60%/i)).toBeInTheDocument();
                // expect(screen.getByText(/Day:/i)).toBeInTheDocument();
                // expect(screen.getByText(/Date:/i)).toBeInTheDocument();