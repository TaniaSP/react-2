import React, { Component } from 'react'

interface Props {
  children: JSX.Element
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor (props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: string): State {
    // Update state so the next render will show the fallback UI.
    console.log(error)
    return { hasError: true }
  }

  // componentDidCatch(args: any): void {
  //   // You can also log the error to an error reporting service
  //   //  logErrorToMyService(error, errorInfo);
  //   this.setState({ hasError: true });
  // }

  render (): JSX.Element {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <p>Something went wrong.</p>
    }

    return this.props.children
  }
}
