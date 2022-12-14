import type { IBaseModel } from '@core/types';

export interface IPiece extends IBaseModel {
  id: string;
  name: string;
  authorId: string;
  releaseYear: number;
  pieceTechniques: IPieceTechnique[];
}

export interface IPieceTechnique extends IBaseModel {
  id: string;
  pieceId: string;
  techniqueId: string;
  description: string;
}

export interface ITechnique extends IBaseModel {
  id: string;
  name: string;
  description: string;
}

export interface IRepertoireItem extends IBaseModel {
  id: string;
  name: string;
  pieceId: string;
  piece?: Partial<IPiece>;
}
