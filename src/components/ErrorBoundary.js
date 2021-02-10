import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="text-center">
                    <h4>OOPs, Something went wrong</h4>
                    <p>Please <b><u>refresh</u></b> the page to start again.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;