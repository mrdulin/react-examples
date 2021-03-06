import React, { ReactNode, RefAttributes } from 'react';

interface ModalProps {
  title: ReactNode;
}
interface ModalStaticProps {
  show(): void;
  hide(): void;
}
const Modal: React.ForwardRefExoticComponent<ModalProps & RefAttributes<HTMLDivElement>> = React.forwardRef<
  HTMLDivElement,
  ModalProps
>(({ title }: ModalProps, ref) => {
  return <div ref={ref}>{title}</div>;
});

// Modal.show = () => { };
// Modal.hide = () => { };

const ModalComponent = Modal as React.ForwardRefExoticComponent<ModalProps & RefAttributes<HTMLDivElement>> &
  ModalStaticProps;
ModalComponent.show = () => {};
ModalComponent.hide = () => {};

function Consumer() {
  return <div onClick={() => ModalComponent.show()} />;
}
