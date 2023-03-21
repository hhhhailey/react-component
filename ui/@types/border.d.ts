type BorderTypeUnion = 'bb' | 'bt' | 'bl' | 'br' | 'bx' | 'by' | 'b';
type BorderSizeUnion = 'px' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type BorderUnion = `${BorderTypeUnion}-${BorderSizeUnion}`;

export interface BorderProps {
  border?: BorderUnion | BorderUnion[];
}
