import {RouteType} from "./routeType";
import {Point} from "./point";

const DEGREE_IN_KM = 111.0;


export class RoutePlanner {
    
    private type: RouteType;
    private start: Point;
    private end: Point;

    
    constructor(type: RouteType, start: Point, end: Point) {
        this.type = type;
        this.start = start;
        this.end = end;
    }
    
    public getRouteType(): RouteType {
        return this.type;
    }
    
    public setRouteType(type: RouteType) {
        this.type = type;
    }

    /**
     * Returns the direct distance between start and end, regardless of any roads
     *
     * @returns {number}
     */
    public getBeeline():number {
        return Math.sqrt(Math.pow(this.start.X - this.end.X, 2) + Math.pow(this.start.Y - this.end.Y, 2)) * DEGREE_IN_KM;
    }

    /**
     * Get the suggested route as array of points
     *
     * @returns {Point[]}
     */
    public getRoute():Array<Point> {
        return new Array<Point>();
    }
    
    

}