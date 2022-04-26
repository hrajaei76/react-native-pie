export default Pie;

 declare function Pie({ sections, radius, innerRadius, backgroundColor, strokeCap, dividerSize }: {
    radius: number;
    sections: {
      percentage: number;
      color: string;
    }[];
    strokeCap?: 'butt' | 'round';
    innerRadius?: number;
    dividerSize?: number;
    backgroundColor?: string;
 }): JSX.Element;
