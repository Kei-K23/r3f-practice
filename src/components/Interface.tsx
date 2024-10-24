import { Monitor } from "lucide-react";

export function Interface() {
  return (
    <div className="fixed top-0 left-0 w-full p-4 text-white z-10">
      <div className="max-w-2xl mx-auto bg-black/50 backdrop-blur-sm rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Monitor className="w-5 h-5" />
          <h1 className="text-xl font-bold">React Three Fiber Demo</h1>
        </div>
        <p className="text-sm opacity-80">
          Interact with the scene using your mouse:
          <br />
          • Left click + drag to rotate
          <br />
          • Right click + drag to pan
          <br />• Scroll to zoom
        </p>
      </div>
    </div>
  );
}
