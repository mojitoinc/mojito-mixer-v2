import React__default from 'react';

class ErrorBoundary extends React__default.Component {
    constructor() {
        super(...arguments);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        const { onCatch } = this.props;
        if (!onCatch)
            console.error(error, errorInfo);
        const useConfirmModal = !onCatch || onCatch(error, errorInfo) === true;
        if (useConfirmModal) {
            // eslint-disable-next-line no-alert
            const retry = window.confirm("Sorry, there was an unexpected error. Do you want to re-open the payment modal?");
            if (retry)
                this.setState({ hasError: false });
        }
    }
    render() {
        // eslint-disable-next-line react/destructuring-assignment
        return this.state.hasError ? null : this.props.children;
    }
}

export { ErrorBoundary };
//# sourceMappingURL=ErrorBoundary.js.map
