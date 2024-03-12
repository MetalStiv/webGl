import { vec2 } from "gl-matrix";
import { IQuad } from "./IQuad";

export interface ISpriteFontChar {
    textureCoord: IQuad,
    size: vec2,
    advance: number,
    offset: vec2,
}