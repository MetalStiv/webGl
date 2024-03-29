import { vec2 } from "gl-matrix";
import { IQuad } from "./IQuad";
import { ISpriteFontChar } from "./ISpriteFontChar";

const charsSymbol: unique symbol = Symbol();
const lineHeightSymbol: unique symbol = Symbol();
const textureSymbol: unique symbol = Symbol();
const nameSymbol: unique symbol = Symbol();

export interface ISpriteFont {
    [charsSymbol]: Map<number, ISpriteFontChar>;
    [lineHeightSymbol]: number,
    [textureSymbol]: HTMLImageElement,
    [nameSymbol]: string,
    getChar: (unicode: number) => ISpriteFontChar,
    load: (gl: WebGL2RenderingContext, data: any, texture: HTMLImageElement, name: string) => void,
    getName: () => string,
}

export const createFont = () => {
    const spriteFont: ISpriteFont = {
        [charsSymbol]: new Map(),
        [lineHeightSymbol]: 0,
        [textureSymbol]: null,
        [nameSymbol]: '',
        getChar(unicode: number){
            return this[charsSymbol].get(unicode)!;
        },
        load(gl: WebGL2RenderingContext, data: any, texture: HTMLImageElement, name: string){
            this[nameSymbol] = name;
            this[textureSymbol] = texture;
            var lineHeight =  data.font.common.lineHeight;
            this[lineHeightSymbol] = lineHeight;
            for(var ch of data.font.chars[0].char){
                var id: number = parseInt(ch['$'].id);
                var x: number = parseInt(ch['$'].x);
                var y: number = parseInt(ch['$'].y);
        
                var width: number = parseInt(ch['$'].width);
                var height: number = parseInt(ch['$'].height);
                var xAdvance: number = parseInt(ch['$'].xadvance);
                var xOffset: number = parseInt(ch['$'].xoffset);
                var yOffset: number = parseInt(ch['$'].yoffset);
        
                var x1: number = x/texture.width;
                var y1: number = y/texture.height;
                var x2: number = (x+width)/texture.width;
                var y2: number = (y+height)/texture.height;
        
                var quad: IQuad = {
                    a: vec2.fromValues(x1, y1),
                    b: vec2.fromValues(x2, y1),
                    c: vec2.fromValues(x2, y2),
                    d: vec2.fromValues(x1, y2),
                }

                this[charsSymbol].set(id, {
                    textureCoord: quad,
                    size: vec2.fromValues(width, height),
                    advance: xAdvance,
                    offset: vec2.fromValues(xOffset, yOffset),
                })
            }
        },
        getName(){
            return this[nameSymbol];
        }
    }
    return spriteFont;
}

export type TCreateFont = ReturnType<typeof createFont>