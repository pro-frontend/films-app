import React, { Component, ReactNode } from "react";
import DefaultTemplate from "./DefaultTemplate";
import {
  IErrorBoundaryProps,
  IErrorBoundaryState,
} from "./ErrorBoundary.types";

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): IErrorBoundaryState {
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <DefaultTemplate />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
