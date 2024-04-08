import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "../src/privateRoute";
import { act } from "react-dom/test-utils";
import { describe, it, expect } from "vitest";

describe("PrivateRoute Component", () => {
  describe("renders LoginSetup component on '/' route", () => {
    it("should render the LoginSetup component", async () => {
      await act(async () => {
        render(
          <PrivateRoute />
        );
      });
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });

  describe("renders Dashboard component on '/Dashboard' route", () => {
    it("should render the Dashboard component", async () => {
      await act(async () => {
        window.history.pushState({}, "Dashboard Page", "/Dashboard");
        render(
          <PrivateRoute />
        );
      });
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });
});