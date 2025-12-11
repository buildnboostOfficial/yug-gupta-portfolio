export function YugGuptaMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 0h64v96l32 64 32-64V0h64v96L128 256H64L0 96V0ZM320 0h128v64h-64v64h64v64h-64v64h-64V0ZM448 128h64v64h-64v-64Z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M0 0h32v48l16 32 16-32V0h32v48L64 128H32L0 48V0ZM160 0h64v32h-32v32h32v32h-32v32h-32V0ZM224 64h32v32h-32V64Z"/></svg>`;
}
