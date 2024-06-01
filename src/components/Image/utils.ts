import { CSSProperties } from 'react';
import { ParallaxPosition } from './resources';

export function getParallaxPosition(
  pos: ParallaxPosition,
  scrollAmount: number
): CSSProperties {
  const deltaX = pos.moveX === undefined ? 0 : pos.moveX * scrollAmount;
  const deltaY = pos.moveY * scrollAmount;
  const deltaRotate = pos.rotate ? pos.rotate * scrollAmount : 0;

  return {
    position: pos.fixed ? 'fixed' : 'absolute',
    transform: `translate(${deltaX}px, ${deltaY}px) rotate(${deltaRotate}deg)`,
    width: `${pos.width}%`,
    top: pos.top !== undefined ? `${pos.top}%` : '',
    right: pos.right !== undefined ? `${pos.right}%` : '',
    bottom: pos.bottom !== undefined ? `${pos.bottom}%` : '',
    left: pos.left !== undefined ? `${pos.left}%` : '',
    zIndex: pos.zIndex,
    transition: 'transform 0.05s ease'
  };
}
