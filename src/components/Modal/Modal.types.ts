export interface IModalProps {
  active: boolean;
  mode: Tmode;
  filmId: number;
}
export type Tmode = "CREATE" | "EDIT" | "DELETE";

export interface IModalHeaderProps {
  headerTitle: string;
}

export interface IModalBodyProps {
  mode: Tmode;
}
export interface IModalFooterProps {
  mode: Tmode;
}
