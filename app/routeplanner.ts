/// <reference path="../typings/index.d.ts"/>

import {RouteType} from "./routeType";
import {Point} from "./point";
import * as _ from "underscore";

/* approximate distance in kilometers at surface of earth for one degree longitude or latitude (i.e. from 47° to 48°) */
const DEGREE_IN_KM = 111.0;

/**
 * Class to calculate a route from A to B
 */
export class RoutePlanner {

    private type:RouteType;
    private start:Point;
    private end:Point;


    constructor(type:RouteType, start:Point, end:Point) {
        this.type = type;
        this.start = start;
        this.end = end;
    }

    public getRouteType():RouteType {
        return this.type;
    }

    public setRouteType(type:RouteType) {
        this.type = type;
    }

    /**
     * Returns the direct distance between start and end, regardless of any roads
     *
     * @returns {number}
     */
    public getBeelineDistance():number {
       return this.getDistance(this.start, this.end);
    }

    /**
     * Simple Pythagoras calculation between two points
     *
     * @param point1 -
     * @param point2
     * @returns {number} - distance between two points in kilometers
     */
    private getDistance(point1:Point, point2:Point):number {
        return Math.sqrt(Math.pow(point1.X - point2.X, 2) + Math.pow(point1.Y - point2.Y, 2)) * DEGREE_IN_KM;
    }

    /**
     * Get the suggested route as array of points
     *
     * @returns {Point[]}
     */
    public getRoute():Array<Point> {

        // here we would query a road api that returns different points depending on the selected road type
        // return new Array<Point>();
        return [new Point(1,1),new Point(1,2), new Point(2,2)];
    }


    /**
     * Calculates approximate distance based on geo coordinates that follow the route
     *
     * @returns {number} approximate distance with selected route in kilometers
     */
    public getRealDistance():number {
        let totalDistance:number = 0;
        let previous:Point;

        // use underscore's for each function
        _.each(this.getRoute(), (point)=> {
            if (previous != null) {
                totalDistance += this.getDistance(previous,point);
            }

            previous = point;
        });

        return totalDistance;
    }


}