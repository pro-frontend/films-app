export interface IModalProps {
  active: boolean;
  mode: Tmode;
  filmId: number;
  onModalClose?: () => void;
  onModalSubmit?: () => void;
  onModalReset?: () => void;
}

export interface IModalHeaderProps {
  headerTitle: string;
  onModalClose: () => void;
}

export interface IModalBodyProps {
  mode: Tmode;
}

export interface IModalBodyForm {
  title: string;
  releaseDate: string;
  movieUrl: string;
  genre: string;
  overView: string;
  runTime: string;
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
