// Type declarations for Google's model-viewer web component
declare namespace JSX {
    interface IntrinsicElements {
        'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            src?: string;
            alt?: string;
            poster?: string;
            'auto-rotate'?: boolean;
            'camera-controls'?: boolean;
            'shadow-intensity'?: string;
            'environment-image'?: string;
            exposure?: string;
            'auto-rotate-delay'?: string;
            'rotation-per-second'?: string;
            style?: React.CSSProperties;
            class?: string;
        };
    }
}
