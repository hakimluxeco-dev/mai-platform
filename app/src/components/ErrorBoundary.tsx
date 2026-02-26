import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    errorMsg: string;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        errorMsg: ""
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, errorMsg: error.message };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("3D Canvas Error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center p-6 border border-white/20 bg-black/50 backdrop-blur-sm rounded-lg text-red-400 text-sm font-mono w-full h-full text-center">
                    <span className="font-bold text-lg mb-2 text-white">3D Asset Failed to Load</span>
                    <span className="opacity-80 break-words">{this.state.errorMsg}</span>
                </div>
            );
        }

        return this.props.children;
    }
}
