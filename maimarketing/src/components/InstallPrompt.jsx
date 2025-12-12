import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

export default function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Listen for the 'beforeinstallprompt' event
        const handleBeforeInstallPrompt = (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e);
            // Update UI notify the user they can install the PWA
            setIsVisible(true);
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        // Show the install prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);

        // We've used the prompt, and can't use it again, throw it away
        setDeferredPrompt(null);
        setIsVisible(false);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 animate-in slide-in-from-bottom-10 fade-in duration-500">
            <div className="bg-gray-900 border border-brand-blue/30 rounded-xl p-4 shadow-2xl shadow-brand-blue/20 flex items-center justify-between gap-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center shrink-0">
                        <Download className="text-white w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-sm">Install App</h3>
                        <p className="text-gray-400 text-xs">Add to home screen for fast access</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleInstallClick}
                        className="bg-brand-blue hover:bg-blue-600 text-white h-9 px-4 rounded-md text-sm font-medium transition-colors"
                    >
                        Install
                    </button>
                    <button
                        onClick={handleClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
