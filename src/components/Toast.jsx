import { useEffect, useState } from "react";
import { Check } from "lucide-react";



export function Toast({ message, show, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={`fixed bottom-8 right-8 z-[60] transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className="bg-primary text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3">
        <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center flex-shrink-0">
          <Check size={16} />
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
}