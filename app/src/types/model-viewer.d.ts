// Type declarations for Google's model-viewer web component
declare namespace JSX {
    interface IntrinsicElements {
        'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            src?: string;
            alt?: string;
            poster?: string;
            autoplay?: boolean | string;
            'auto-rotate'?: boolean;
            'auto-rotate-delay'?: string;
            'camera-controls'?: boolean;
            'disable-zoom'?: boolean;
            'disable-pan'?: boolean;
            'shadow-intensity'?: string;
            'shadow-softness'?: string;
            'environment-image'?: string;
            exposure?: string;
            'rotation-per-second'?: string;
            'field-of-view'?: string;
            'min-camera-orbit'?: string;
            'max-camera-orbit'?: string;
            'camera-orbit'?: string;
            'interaction-prompt'?: string;
            loading?: string;
            reveal?: string;
            style?: React.CSSProperties;
            class?: string;
        };
    }
}
