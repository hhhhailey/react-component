type RadiusTypeUnion = 'rtl' | 'rtr' | 'rbl' | 'rbr' | 'r';
type RadiusSizeUnion = 'px' | 0 | 4 | 6 | 8 | 12 | 16 | 20;

export type RadiusUnion = `${RadiusTypeUnion}-${RadiusSizeUnion}`;

export interface RadiusProps {
  radius?: RadiusUnion | RadiusUnion[];
}
