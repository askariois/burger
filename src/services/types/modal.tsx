export interface IModalProps {
   close: () => void;
   header?: string;
   children: React.ReactNode;
}

export interface IModalOverlayProps {
   closeOverlay: () => void;
   children: React.ReactNode;
}
