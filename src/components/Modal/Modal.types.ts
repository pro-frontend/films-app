export interface IModalProps {
  active: boolean;
  mode: Tmode;
  filmId: number;
  onModalClose: () => void | undefined;
  onModalSubmit: () => void | undefined;
  onModalReset: () => void | undefined;
}

export interface IModalHeaderProps {
  headerTitle: string;
  onModalClose: () => void;
}

export interface IModalBodyProps {
  mode: Tmode;
}
export interface IModalFooterProps {
  mode: Tmode;
  filmId: number;
  onModalSubmit: () => void;
  onModalReset: () => void;
}

export enum Tmode {
  CREATE = "CREATE",
  EDIT = "EDIT",
  DELETE = "DELETE",
}
