import { Camera } from "@/types/canvas"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const COLORS = [
  "#DC2626",
  "#F59E0B",
  "#10B981",
  "#14B8A6",
  "#6366F1",
  "#8B5CF6",
  "#EC4899",
  "#F472B6",
]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length]
}

export function pointerEventToCanvasPoint (e: React.PointerEvent, camera: Camera) {
  return {
    x: Math.round(e.clientX - camera.x),
    y: Math.round(e.clientY - camera.y),
  }
}