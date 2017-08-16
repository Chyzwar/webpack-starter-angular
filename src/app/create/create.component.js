import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var CreateComponent = (function () {
    function CreateComponent(route) {
        this.route = route;
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = tslib_1.__decorate([
        Component({
            selector: 'create-component',
            templateUrl: './create.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
    ], CreateComponent);
    return CreateComponent;
}());
export { CreateComponent };
