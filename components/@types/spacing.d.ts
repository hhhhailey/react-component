type MarginTypeUnion = 'm' | 'mx' | 'my' | 'mt' | 'mb' | 'ml' | 'mr';
type PaddingTypeUnion = 'p' | 'px' | 'py' | 'pt' | 'pb' | 'pl' | 'pr';
type SpacingSizesUnion =
  | 'px'
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 16
  | 17
  | 20
  | 21
  | 24
  | 28
  | 30
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96;

export type MarginSpacingUnion = `${MarginTypeUnion}-${SpacingSizesUnion}`;
export type PaddingSpacingUnion = `${PaddingTypeUnion}-${SpacingSizesUnion}`;
export type IconSpacingSizeUnion = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 64 | 128 | 256;

export interface SpacingProps {
  margin?: MarginSpacingUnion | MarginSpacingUnion[];
  padding?: PaddingSpacingUnion | PaddingSpacingUnion[];
}
